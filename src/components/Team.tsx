import { TeamJoinFormButton } from "@/components/TeamJoinFormButton";
import type { ReactNode } from "react";

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
    linkedin: "https://www.linkedin.com/in/mohammad-talha0",
    instagram: "https://www.instagram.com/akhi_x1_/",
  },
  {
    name: "Mashhood Akhund",
    role: "CO Founder and COO",
    linkedin: "https://www.linkedin.com/in/mashhood-akhund",
    instagram:
      "https://www.instagram.com/mashhood.0?igsh=MWcyNzkwODVuN3pwMg==",
  },
  {
    name: "Ahmad Faraz",
    role: "Chief Technology Officer",
    linkedin: "",
    instagram: "",
  },
  {
    name: "Fatima Akhund",
    role: "Head of Sales",
    linkedin:
      "https://www.linkedin.com/in/fatima-akhund-9292b8258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3A2wWyukSpKU%2BggDZlhhTA%3D%3D",
    instagram: "https://www.instagram.com/fatimagulakhund/",
  },
  {
    name: "Muhammad Saqib",
    role: "Regional manager",
    linkedin: "https://www.linkedin.com/in/muhammad-saqib-310512395",
    instagram: "https://www.instagram.com/saqib_alee17",
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

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  if (!href) {
    return (
      <span
        aria-label={`${label} unavailable`}
        className="inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-lg border border-outline-variant/20 text-on-surface-variant/40"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface-variant transition-colors hover:border-primary-fixed hover:text-primary-fixed"
    >
      {children}
    </a>
  );
}

export function Team() {
  return (
    <section
      id="team"
      className="relative mx-auto max-w-container-max border-t border-outline-variant/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-gutter lg:py-section-padding"
    >
      <div className="mb-stack-lg text-center">
        <span className="mb-4 block font-label-xs uppercase tracking-[0.3em] text-primary-container">
          Our Experts
        </span>
        <h2 className="font-headline-lg text-on-surface">
          Professional Creative Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body-lg text-on-surface-variant">
          The minds behind the magic. Our team blends technical mastery with
          artistic vision.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-fixed/50 hover:shadow-[0_0_20px_rgba(195,244,0,0.05)] sm:p-8"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-outline-variant/20 transition-colors duration-300 group-hover:bg-primary-fixed" />
            <div className="flex min-h-44 flex-col justify-between">
              <div>
                <h3 className="font-title-md text-on-surface">
                  {member.name}
                </h3>
                <p className="mt-2 font-body-sm text-on-surface-variant">
                  {member.role}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <SocialLink
                  href={member.linkedin}
                  label={`${member.name} LinkedIn`}
                >
                  <LinkedInIcon />
                </SocialLink>
                <SocialLink
                  href={member.instagram}
                  label={`${member.name} Instagram`}
                >
                  <InstagramIcon />
                </SocialLink>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-stack-md flex justify-center">
        <TeamJoinFormButton />
      </div>
    </section>
  );
}
