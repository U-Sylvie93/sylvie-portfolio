export const contactFields = ["name", "email", "subject", "message"] as const;
export type ContactField = (typeof contactFields)[number];
export type ContactErrors = Partial<Record<ContactField, string>>;
export const contactLimits = {
  name: 100,
  email: 254,
  subject: 160,
  message: 5000,
};
export function validateContact(
  values: Record<string, unknown>,
): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of contactFields) {
    const value =
      typeof values[field] === "string" ? (values[field] as string).trim() : "";
    if (!value)
      errors[field] =
        `Please enter your ${field === "subject" ? "subject" : field}.`;
    else if ((values[field] as string).length > contactLimits[field])
      errors[field] = `Use ${contactLimits[field]} characters or fewer.`;
    else if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      errors.email = "Enter a valid email address, such as you@example.com.";
    else if (field === "message" && value.length < 10)
      errors.message =
        "Please write at least 10 characters about your message.";
    else if (field === "subject" && /[\r\n]/.test(value))
      errors.subject = "Please keep the subject on one line.";
  }
  return errors;
}
