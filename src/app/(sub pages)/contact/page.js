import Image from "next/image";
import bg from "../../../../public/background/contact-background2.webp";
import Form from "@/components/contact/Form";
import Reveal from "@/components/ui/Reveal";
import { personalData } from "@/app/data";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  FileText,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Saad Ahmed Khanzada — Senior Software Engineer open to remote senior and technical lead roles worldwide.",
};

const goodFits = [
  "Senior Software Engineer roles (web, mobile, or both)",
  "Technical Lead or delivery ownership positions",
  "Product engineering at a startup that needs range",
  "Contract work on React Native or Next.js products",
  "Stabilising or taking over an inherited codebase",
];

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt=""
        priority
        sizes="100vw"
        className="fixed left-0 top-0 -z-50 h-full w-full object-cover object-center opacity-20"
      />

      <div id="main-content" className="page-shell max-w-5xl py-4">
        <header className="flex flex-col items-center text-center">
          <span className="eyebrow">Contact</span>

          <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s talk
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base">
            I&apos;m open to remote senior and technical lead roles worldwide, and
            to contract work on web and mobile products. If you&apos;re hiring or
            scoping a build, send me the details and I&apos;ll come back to you
            with an honest read on fit — including if I&apos;m not the right
            person for it.
          </p>

          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-medium text-accent">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Typically replies within 24 hours
          </p>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {/* Direct contact details — always faster than a form */}
          <Reveal className="custom-bg-raised flex flex-col rounded-xl p-5 sm:p-6 lg:col-span-2">
            <h2 className="font-display text-base font-bold text-foreground sm:text-lg">
              Reach me directly
            </h2>
            <div aria-hidden="true" className="hairline mt-3 h-px w-full" />

            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${personalData.email}`}
                  className="group flex items-start gap-3 text-sm transition-colors hover:text-accent"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] uppercase tracking-wider text-muted">
                      Email
                    </span>
                    <span className="block break-all font-medium text-foreground group-hover:text-accent">
                      {personalData.email}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${personalData.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3 text-sm transition-colors hover:text-accent"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] uppercase tracking-wider text-muted">
                      Phone
                    </span>
                    <span className="block font-medium text-foreground group-hover:text-accent">
                      {personalData.phone}
                    </span>
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[0.7rem] uppercase tracking-wider text-muted">
                    Location
                  </span>
                  <span className="block font-medium text-foreground">
                    {personalData.location}
                  </span>
                  <span className="block text-xs text-muted">
                    {personalData.availability}
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-accent/15 pt-5">
              <a
                href={personalData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 !px-3 !py-2 !text-xs"
              >
                <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={personalData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 !px-3 !py-2 !text-xs"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full !px-3 !py-2 !text-xs"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                Download résumé
              </a>
            </div>

            {/* Sets expectations before someone spends time writing */}
            <div className="mt-6 border-t border-accent/15 pt-5">
              <h3 className="eyebrow mb-3">Good fits</h3>
              <ul className="flex flex-col gap-2">
                {goodFits.map((fit) => (
                  <li
                    key={fit}
                    className="flex gap-2 text-xs leading-relaxed text-foreground/75"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{fit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal
            delay={0.08}
            className="custom-bg-raised flex flex-col rounded-xl p-5 sm:p-6 lg:col-span-3"
          >
            <h2 className="font-display text-base font-bold text-foreground sm:text-lg">
              Send a message
            </h2>
            <p className="mt-1.5 text-xs text-muted">
              A sentence or two about the role or project is plenty to start.
            </p>
            <div aria-hidden="true" className="hairline mt-3 h-px w-full" />

            <div className="mt-5">
              <Form />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
