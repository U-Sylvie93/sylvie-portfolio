import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact-validation";
// In-memory limit is per server instance. Use a shared rate limiter for multi-instance deployments.
const recent = new Map<string, number>();
export async function POST(request: Request) {
  const { CONTACT_EMAIL, CONTACT_FROM_EMAIL, RESEND_API_KEY } = process.env;
  if (!CONTACT_EMAIL || !CONTACT_FROM_EMAIL || !RESEND_API_KEY)
    return NextResponse.json(
      {
        message:
          "Message delivery hasn’t been configured yet. Please connect with Sylvie on LinkedIn. Your message was not sent.",
      },
      { status: 503 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { message: "Unsupported request format." },
      { status: 415 },
    );
  const origin = request.headers.get("origin");
  const allowedOrigin =
    process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
  if (origin && origin !== allowedOrigin)
    return NextResponse.json(
      { message: "Invalid request origin." },
      { status: 403 },
    );
  try {
    const bodyText = await request.text();
    if (bodyText.length > 15000)
      return NextResponse.json(
        { message: "Message is too large." },
        { status: 413 },
      );
    const body: Record<string, unknown> = JSON.parse(bodyText);
    if (!body || typeof body !== "object") throw new Error("Invalid payload");
    if (body.website)
      return NextResponse.json(
        { message: "Unable to send this message." },
        { status: 400 },
      );
    const errors = validateContact(body);
    if (Object.keys(errors).length)
      return NextResponse.json(
        { message: "Please review the contact fields.", errors },
        { status: 400 },
      );
    const email = (body.email as string).trim();
    const now = Date.now();
    for (const [key, time] of recent)
      if (now - time > 60000) recent.delete(key);
    if (recent.has(email.toLowerCase()))
      return NextResponse.json(
        { message: "Please wait a minute before sending another message." },
        { status: 429 },
      );
    recent.set(email.toLowerCase(), now);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_EMAIL,
        reply_to: email,
        subject: `Portfolio: ${body.subject}`,
        text: `From: ${body.name}\nEmail: ${email}\n\n${body.message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok)
      return NextResponse.json(
        {
          message: "Your message could not be delivered. Please try LinkedIn.",
        },
        { status: 502 },
      );
    return NextResponse.json({
      message: "Your message has been sent. Thank you for getting in touch!",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Unable to send your message. Please check the fields or try LinkedIn.",
      },
      { status: 400 },
    );
  }
}
