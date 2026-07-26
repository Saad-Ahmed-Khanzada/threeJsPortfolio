import { Inter, Sora } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBg from "@/components/FireFliesBg";
import Sound from "@/components/Sound";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { personalData, professionalSummary } from "./data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Display face for headings — gives the type hierarchy a distinct voice
// from body copy without loading a second body font.
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const siteUrl = "https://saad-ahmed-khanzada-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalData.name} · ${personalData.title}`,
    template: `%s | ${personalData.name}`,
  },
  description:
    "Senior Software Engineer with 4+ years building web and mobile products in React, React Native, Next.js and SvelteKit. I lead a 12-person cross-functional team, own delivery, and work with clients directly.",
  keywords: [
    "Senior Software Engineer",
    "Technical Lead",
    "Product Engineer",
    "React Native Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Redux Toolkit",
    "SvelteKit",
    "Mobile App Developer",
    "AI Automation",
    "n8n",
    "Saad Ahmed Khanzada",
  ],
  authors: [{ name: personalData.name, url: siteUrl }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${personalData.name} · Portfolio`,
    title: `${personalData.name} · ${personalData.title}`,
    description: personalData.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} · ${personalData.title}`,
    description: personalData.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#0A0C0E",
  width: "device-width",
  initialScale: 1,
};

// Person schema so search engines and recruiter tooling can read the
// profile as structured data rather than inferring it from copy.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalData.name,
  jobTitle: personalData.title,
  description: professionalSummary,
  email: `mailto:${personalData.email}`,
  telephone: personalData.phone,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    personalData.links.linkedin,
    personalData.links.github,
  ],
  knowsAbout: [
    "React",
    "React Native",
    "Next.js",
    "SvelteKit",
    "TypeScript",
    "Redux Toolkit",
    "Firebase",
    "AWS",
    "n8n workflow automation",
    "Technical leadership",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          sora.variable,
          "bg-background text-foreground font-inter antialiased"
        )}
      >
        {/* Keyboard users can reach content without traversing the orbit nav */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2
            focus:-translate-x-1/2 focus:z-[100] focus:custom-bg focus:rounded-lg
            focus:px-4 focus:py-2 focus:text-accent focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <NavigationProvider>
          {children}
          <FireFliesBg />
          <Sound />
        </NavigationProvider>

        <div id="my-modal" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
