import Link from "next/link";

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
