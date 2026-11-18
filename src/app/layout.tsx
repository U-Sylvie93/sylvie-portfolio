import type { Metadata } from "next";
import "./globals.css";
const title = "Umutoniwase Sylvie | Full-Stack Web Developer";
const description =
  "Explore Umutoniwase Sylvie’s full-stack web projects, technical skills and certifications. Information Technology student at the University of Rwanda.";
const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = configuredOrigin ? new URL(configuredOrigin) : undefined;
export const metadata: Metadata = {
  title,
  description,
  ...(siteUrl ? { metadataBase: siteUrl, alternates: { canonical: "/" } } : {}),
  openGraph: {
    title,
    description,
    siteName: "Umutoniwase Sylvie",
    type: "website",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: "summary", title, description },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem('sylvie-theme')==='light'?'light':'dark'}catch{};addEventListener('storage',e=>{if(e.key==='sylvie-theme')document.documentElement.dataset.theme=e.newValue==='light'?'light':'dark'})`,
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
