import Link from "next/link";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 bg-black text-white">
      {/* Top footer: 4 content columns */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 px-4 py-10">
        {/* Brand + slogan */}
        <div className="flex items-center gap-6 ml-auto">
          <span
            aria-hidden="true"
            className={`${pixelFont.className} inline-flex text-3xl h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-emerald-500 text-white font-black`}
          >
            W
          </span>

          <span
            className={`${pixelFont.className} text-2xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent`}
          >
            WIZARD
          </span>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/faginnhold" className="hover:underline">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/Oppgaver" className="hover:underline">
                Challenge
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:hello@wizard.local" className="hover:underline">
                hello@wizard.local
              </a>
            </li>
            <li>Students • Practice website</li>
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Follow us
          </h3>
          <div className="flex gap-3 ">
            {/* GitHub */}
            <a
              aria-label="GitHub"
              href="#"
              className="rounded p-2 ring-1 ring-neutral-300 hover:bg-neutral-50 dark:ring-neutral-700"
            >
              {/* ... SVG code ... */}
            </a>
            {/* Twitter */}
            <a
              aria-label="Twitter"
              href="#"
              className="rounded p-2 ring-1 ring-neutral-300 hover:bg-neutral-50 dark:ring-neutral-700"
            >
              {/* ... SVG code ... */}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-neutral-200/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-neutral-500 sm:flex-row">
          <p>{new Date().getFullYear()} Wizard of Web — built for learning</p>
          <div className="flex items-center gap-3">
            <Link href="/faginnhold" className="hover:underline">
              Courses
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/Oppgaver" className="hover:underline">
              Challenge
            </Link>
            <a
              href="#top"
              className="rounded px-2 py-1 ring-1 ring-neutral-300 hover:bg-neutral-50 dark:ring-neutral-700"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
