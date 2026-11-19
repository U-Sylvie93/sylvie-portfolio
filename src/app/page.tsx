import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import {
  About,
  Background,
  Skills,
} from "@/components/sections";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { CvDialog, SocialLinks } from "@/components/ui";
export default function Home() {
  const deliveryConfigured = Boolean(
    process.env.CONTACT_EMAIL &&
    process.env.CONTACT_FROM_EMAIL &&
    process.env.RESEND_API_KEY,
  );
  return (
    <>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <About />
        <Background />
        <Contact deliveryConfigured={deliveryConfigured} />
      </main>
      <footer className="container footer">
        <div>
          <a className="brand-name" href="#home">Umutoniwase Sylvie</a>
          <p>Full-Stack Web Developer</p>
        </div>
        <div className="footer-right">
          <SocialLinks />
          <p>
            © {new Date().getFullYear()} Umutoniwase Sylvie. All rights
            reserved.
          </p>
        </div>
      </footer>
      <CvDialog />
    </>
  );
}

