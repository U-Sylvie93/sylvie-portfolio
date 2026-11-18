import assert from "node:assert/strict";

const base = process.env.SMOKE_URL || "http://localhost:3000";
const response = await fetch(base);
assert.equal(response.status, 200, "Homepage serves successfully");
const html = await response.text();
for (const section of [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certifications",
  "contact",
]) {
  assert.ok(html.includes(`id="${section}"`), `${section} is server-rendered`);
}
assert.ok(
  html.includes("Umutoniwase Sylvie | Full-Stack Web Developer"),
  "SEO title is present",
);
assert.ok(
  html.includes('property="og:title"'),
  "Open Graph metadata is present",
);
assert.ok(
  html.includes("Sylvie-website"),
  "Repository cards render without client JavaScript",
);
assert.ok(html.includes("Skip to content"), "Skip navigation is present");
const icon = await fetch(`${base}/favicon.svg`);
assert.equal(icon.status, 200, "Custom favicon is served");
if (html.includes("Messages are not delivered yet.")) {
  const contact = await fetch(`${base}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: new URL(base).origin,
    },
    body: JSON.stringify({
      name: "Smoke Test",
      email: "test@example.com",
      subject: "Local smoke test",
      message: "This message must not be sent without configuration.",
    }),
  });
  assert.equal(contact.status, 503, "Unconfigured delivery fails honestly");
  const result = await contact.json();
  assert.match(result.message, /not sent/);
} else {
  console.log(
    "Delivery is configured; skipping mail request to avoid sending test messages.",
  );
}
console.log(
  "PASS: server-rendered sections, SEO, favicon and contact availability.",
);
