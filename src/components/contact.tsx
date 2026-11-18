"use client";
import { useState } from "react";
import { ArrowUpRight, LoaderCircle, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import {
  contactFields,
  contactLimits,
  validateContact,
  type ContactErrors,
  type ContactField,
} from "@/lib/contact-validation";
export function Contact({
  deliveryConfigured = false,
}: {
  deliveryConfigured?: boolean;
}) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  function validateField(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = event.target.name as ContactField;
    const form = event.target.form;
    if (!form) return;
    const nextErrors = validateContact(Object.fromEntries(new FormData(form)));
    setErrors((previous) => ({ ...previous, [field]: nextErrors[field] }));
  }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    const firstInvalid = contactFields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      setStatus("Please review the highlighted fields before sending.");
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setBusy(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      setStatus(
        typeof result.message === "string"
          ? result.message
          : "Your message could not be sent. Please connect on LinkedIn.",
      );
      if (response.ok) {
        form.reset();
        setErrors({});
      }
    } catch {
      setStatus(
        "Your message could not be sent. Your text is still here; please try again or connect on LinkedIn.",
      );
    } finally {
      setBusy(false);
    }
  }
  function fieldProps(field: ContactField) {
    return {
      id: `contact-${field}`,
      name: field,
      required: true,
      maxLength: contactLimits[field],
      onBlur: validateField,
      "aria-invalid": Boolean(errors[field]),
      "aria-describedby":
        [
          errors[field] ? `${field}-error` : null,
          field === "message" ? "message-help" : null,
        ]
          .filter(Boolean)
          .join(" ") || undefined,
    };
  }
  function error(field: ContactField) {
    return (
      <span className="field-error" id={`${field}-error`}>
        {errors[field]}
      </span>
    );
  }
  return (
    <section
      id="contact"
      className="section container"
      aria-labelledby="contact-title"
    >
      <div className="contact-grid">
        <div>
          <span className="eyebrow">CONTACT</span>
          <h2 id="contact-title">
            Let’s talk about
            <br />
            what you’re building<span className="mint">.</span>
          </h2>
          <p className="contact-description">
            Have a web project, a development opportunity, or a question about
            my work? Email me directly, call, or connect with me on LinkedIn.
          </p>
          <div className="contact-social">
            <a href={"mailto:" + profile.email}><span><span className="small-label">EMAIL</span>{profile.email}</span><ArrowUpRight size={21} aria-hidden="true" /></a>
            <a href={profile.phoneHref}><span><span className="small-label">PHONE</span>{profile.phone}</span><ArrowUpRight size={21} aria-hidden="true" /></a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <span className="small-label">DIRECT CONVERSATION</span>Connect
                on LinkedIn
              </span>
              <ArrowUpRight size={21} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <span>
                <span className="small-label">PROJECTS & CODE</span>Explore
                GitHub
              </span>
              <ArrowUpRight size={21} />
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={submit}
          noValidate
          aria-busy={busy}
          aria-describedby={!deliveryConfigured ? "delivery-note" : undefined}
        >
          {!deliveryConfigured && (
            <p id="delivery-note" className="delivery-notice">
              This form validates your details, but email delivery is not configured. Messages are not delivered yet. Please use the direct email link or LinkedIn.
            </p>
          )}
          <div className="form-row">
            <div className="field-group">
              <label htmlFor="contact-name">Name</label>
              <input
                {...fieldProps("name")}
                autoComplete="name"
                placeholder="Your name"
              />
              {error("name")}
            </div>
            <div className="field-group">
              <label htmlFor="contact-email">Email</label>
              <input
                {...fieldProps("email")}
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
              {error("email")}
            </div>
          </div>
          <div className="field-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              {...fieldProps("subject")}
              placeholder="What would you like to discuss?"
            />
            {error("subject")}
          </div>
          <div className="field-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              {...fieldProps("message")}
              placeholder="Tell me a little about your idea…"
              rows={5}
              minLength={10}
            />
            <span className="field-help" id="message-help">
              At least 10 characters. Please don’t include sensitive
              information.
            </span>
            {error("message")}
          </div>
          <div className="honeypot" aria-hidden="true">
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="form-bottom">
            <p>
              {deliveryConfigured
                ? "Your email is used to reply."
                : "Your message stays in the form if delivery is unavailable."}
            </p>
            <button className="button primary" disabled={busy} type="submit">
              {busy ? (
                <LoaderCircle size={16} className="spin" />
              ) : (
                <Send size={16} />
              )}
              {busy ? "Sending…" : "Send Message"}
            </button>
          </div>
          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}

