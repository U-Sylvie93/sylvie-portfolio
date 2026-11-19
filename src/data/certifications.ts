export type CertificationCategory = "Technical" | "Leadership & Professional Development";
export interface Certification {
  name: string;
  issuer: string;
  provider?: string;
  date: string;
  dateLabel: "Completed" | "Issued";
  category: CertificationCategory;
  duration?: string;
  summary?: string;
  credentialUrl?: string;
  documentUrl?: string;
  image?: string;
}
// Personal certification details supplied by Sylvie; no credential IDs inferred.
export const certifications: Certification[] = [
  { name: "Foundational C# with Microsoft", issuer: "freeCodeCamp in collaboration with Microsoft", date: "2026-10-12", dateLabel: "Completed", category: "Technical", credentialUrl: "https://www.freecodecamp.org/certification/fcc-df763bc2-810a-4103-9cbe-d82075135302/foundational-c-sharp-with-microsoft" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", date: "2026-10-01", dateLabel: "Completed", category: "Technical", duration: "Approximately 300 hours of work", credentialUrl: "https://www.freecodecamp.org/certification/fcc-df763bc2-810a-4103-9cbe-d82075135302/responsive-web-design-v9" },
  { name: "Python Essentials 1", issuer: "Cisco Networking Academy · Python Institute", provider: "TRUSTERLABS Ltd.", date: "2026-06-28", dateLabel: "Completed", category: "Technical" },
  { name: "Associate Python Developer", issuer: "DataCamp", date: "2026-06-10", dateLabel: "Completed", category: "Technical", duration: "30 hours" },
  { name: "Computer Hardware Basics", issuer: "Cisco Networking Academy", provider: "TRUSTERLABS Ltd.", date: "2026-05-26", dateLabel: "Completed", category: "Technical" },
  { name: "IT Essentials", issuer: "Cisco Networking Academy", provider: "University of Rwanda", date: "2026-04-26", dateLabel: "Completed", category: "Technical" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "2025-12-02", dateLabel: "Issued", category: "Technical" },
  { name: "iChoose Leadership Values Program", issuer: "Maxwell Leadership Foundation", date: "2025-06-04", dateLabel: "Completed", category: "Leadership & Professional Development" },
  { name: "iDo Leadership Values Program", issuer: "Maxwell Leadership Foundation", date: "2025-06-04", dateLabel: "Completed", category: "Leadership & Professional Development" },
  { name: "iLead Program", issuer: "Maxwell Leadership Foundation", date: "2025-06-04", dateLabel: "Completed", category: "Leadership & Professional Development", summary: "Completed all three levels: iChoose, iDo & iLead." },
];
