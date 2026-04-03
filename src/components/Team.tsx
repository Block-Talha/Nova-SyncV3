import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  linkedin: string;
  instagram: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Muhammad Talha",
    role: "Founder and CEO",
    linkedin: "linkedin.com/in/mohammad-talha0",
    instagram: "https://www.instagram.com/akhi_.talha/",
  },
  {
    name: "Mashhood Akhund",
    role: "CO Founder and COO",
    linkedin: "https://www.linkedin.com/in/mashhood-akhund",
    instagram: "[url]",
  },
  {
    name: "Ahmad Faraz",
    role: "CTO",
    linkedin: "linkedin.com/in/mohammad-talha0",
    instagram: "https://www.instagram.com/akhi_.talha/",
  },
];

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6c0 1.37 1.11 2.48 2.48 2.48h.03A2.49 2.49 0 0 0 7.5 6 2.5 2.5 0 0 0 4.98 3.5ZM2.9 9.5h4.2v11H2.9v-11Zm6.5 0h4.02v1.5h.06c.56-1.06 1.92-2.18 3.96-2.18 4.23 0 5.01 2.78 5.01 6.39v5.29h-4.2v-4.69c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48v4.77h-4.2v-11Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.9 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
    </svg>
  );
}

export function Team() {
  return (
    <section id="team" className="section-space bg-surface">
      <div className="content-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-4 font-headline text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Professional Creative Team
            </h2>
            <p className="text-sm text-on-surface-variant sm:text-base">
              The minds behind the magic. Our team blends technical mastery with
              artistic vision.
            </p>
          </div>
          <Link
            href="#contact"
            className="w-full rounded-xl border border-outline-variant/30 px-6 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black sm:w-auto"
          >
            Join the Elite
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className="rounded-xl border border-outline-variant/10 bg-surface-container p-6 sm:p-8"
            >
              <h4 className="font-headline text-lg font-bold text-white">
                {member.name}
              </h4>
              <p className="mt-1 text-sm text-on-surface-variant">
                {member.role}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface-variant transition-colors hover:border-primary-fixed hover:text-primary-fixed"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} Instagram`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface-variant transition-colors hover:border-primary-fixed hover:text-primary-fixed"
                >
                  <InstagramIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
111111111111111111111111111111111111111111111111111