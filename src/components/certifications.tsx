import Image from "next/image";
import { ArrowUpRight, Code2, Users } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import { Reveal } from "./ui";
const dateFormat = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
export function CertificationCard({ certificate }: { certificate: Certification }) {
  const technical = certificate.category === "Technical";
  const Icon = technical ? Code2 : Users;
  const headingId = "cert-" + certificate.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return <article className={"certification-card " + (technical ? "technical-certificate" : "leadership-certificate")} aria-labelledby={headingId}>
    {certificate.image && <div className="certificate-image"><Image src={certificate.image} alt={certificate.name + " certificate"} fill sizes="(max-width: 650px) 100vw, 33vw" /></div>}
    <div className="certificate-top"><span className="certificate-mark" aria-hidden="true"><Icon size={20} /></span><span className="small-label">{certificate.issuer}</span></div>
    <h3 id={headingId}>{certificate.name}</h3>
    <p className="certificate-date">{certificate.dateLabel} <time dateTime={certificate.date}>{dateFormat.format(new Date(certificate.date + "T00:00:00Z"))}</time></p>
    {certificate.provider && <p className="certificate-summary">Offered by {certificate.provider}</p>}
    {certificate.duration && <p className="certificate-duration">{certificate.duration}</p>}
    {certificate.summary && <p className="certificate-summary">{certificate.summary}</p>}
    {(certificate.credentialUrl || certificate.documentUrl) && <div className="certificate-links">
      {certificate.credentialUrl && <a className="text-link" href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" aria-label={"View " + certificate.name + " credential (opens in new tab)"}>View credential <ArrowUpRight size={15} /></a>}
      {certificate.documentUrl && <a className="text-link" href={certificate.documentUrl} target="_blank" rel="noopener noreferrer" aria-label={"View " + certificate.name + " certificate PDF (opens in new tab)"}>View certificate (PDF) <ArrowUpRight size={15} aria-hidden="true" /></a>}
    </div>}
  </article>;
}
export function Certifications() {
  return <section id="certifications" className="section container certifications-section" aria-labelledby="certifications-title"><Reveal>

    <div className="section-heading"><div><h2 id="certifications-title">Certifications</h2><p>Structured technical learning, alongside leadership development.</p></div></div>
    <h3 className="certificate-group-title">Technical Certifications</h3>
    <div className="certification-grid">{certifications.filter(c => c.category === "Technical").map(c => <CertificationCard key={c.name} certificate={c} />)}</div>
    <div className="leadership-heading"><span className="small-label">PROFESSIONAL DEVELOPMENT</span><h3>Leadership &amp; Professional Development</h3></div>
    <div className="certification-grid leadership-grid">{certifications.filter(c => c.category !== "Technical").map(c => <CertificationCard key={c.name} certificate={c} />)}</div>
  </Reveal></section>;
}
