import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { profile } from "@/data/portfolio";
// Server-side detection avoids a broken request or fabricated portrait when no photo is supplied.
export function ProfilePhoto() {
  const available = profile.showProfileImage && existsSync(join(process.cwd(), "public", profile.profileImage.replace(/^\//, "")));
  return <div className="profile-identity">
    <div className="profile-photo-frame">{available ? <Image src={profile.profileImage} alt="Umutoniwase Sylvie" fill sizes="(max-width: 600px) 96px, 112px" className="profile-photo" /> : <span className="profile-monogram" aria-hidden="true">S<span>.</span></span>}</div>
    <div><span className="small-label">FULL-STACK WEB DEVELOPER</span><h3>Umutoniwase Sylvie</h3><p>Information Technology · University of Rwanda</p></div>
  </div>;
}
