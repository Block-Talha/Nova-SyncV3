import Link from "next/link";
import type { SVGProps } from "react";

const socialLinks = [
  {
    label: "Facebook",
    href: "",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/novasyncsolution/",
    Icon: LinkedInIcon,
  },
  {
    label: "X",
    href: "",
    Icon: XIcon,
  },
] as const;

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7h2.35l.4-2.92H13.5V9.22c0-.84.24-1.42 1.46-1.42H16.5V5.18c-.27-.04-1.18-.12-2.24-.12-2.2 0-3.7 1.34-3.7 3.82v2.2H8v2.92h2.56v7h2.94Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.43 8.64A1.64 1.64 0 1 0 6.43 5.36a1.64 1.64 0 0 0 0 3.28ZM5 19h2.86V10.36H5V19Zm4.64 0h2.85v-4.83c0-1.27.24-2.5 1.82-2.5 1.56 0 1.58 1.46 1.58 2.58V19H18.75v-5.32c0-2.61-.56-4.62-3.6-4.62-1.46 0-2.43.8-2.83 1.56h-.04v-1.26H9.64c.04.82 0 8.64 0 8.64Z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.3 19.477h2.039L6.486 3.24H4.298L17.6 20.63Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-20 w-full border-t border-white/5 bg-zinc-950 py-16"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-12 px-4 sm:px-6 md:flex-row md:px-8">
        <div className="ml-2 border-l-4 border-lime-400 pl-4 sm:ml-4 sm:pl-5 md:ml-8 md:pl-6">
          <div
            className="mb-4 text-xl font-black italic text-white"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Nova Sync
          </div>
          <p className="max-w-xs text-sm text-zinc-500">
            Digital growth systems for ambitious businesses locally and worldwide.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors duration-200 hover:border-lime-400 hover:text-lime-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            &copy; 2026 Nova Sync. Digital Growth Systems.
          </p>
        </div>

        <div className="flex flex-col gap-12 text-sm sm:flex-row md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="mb-2 font-bold text-white">Navigation</span>
            <Link
              href="#pricing"
              className="block text-lime-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Solutions
            </Link>
            <Link
              href="#team"
              className="block text-zinc-500 transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Case Studies
            </Link>
            <Link
              href="#solutions"
              className="block text-zinc-500 transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Services
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="mb-2 font-bold text-white">Legal &amp; Contact</span>
            <Link
              href="#"
              className="block text-zinc-500 transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="#contact"
              className="block text-zinc-500 transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
