import Link from "next/link";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});


export default function Footer() {
  return (
    <footer className=" border-neutral-200/60 bg-black text-white">
      {/* Top footer: 4 cột nội dung */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 px-4 py-10">
        {/* Brand + slogan */}
        <div className="flex items-center gap-6  ml-auto">
            <span
              aria-hidden="true"
              className= {`${pixelFont.className} inline-flex text-3xl h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-emerald-500 text-white font-black`}
            >
              W
            </span>
            
            <span className ={`${pixelFont.className} } text-2xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent`}>
              WIZARD
            </span>
          </div>

        {/* Hurtiglenker */}
        <nav aria-label="Hurtiglenker">
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Forside</Link></li>
            <li><Link href="/Faginnhold" className="hover:underline">Faginnhold</Link></li>
            <li><Link href="/Oppgaver" className="hover:underline">Oppgaver</Link></li>
          </ul>
        </nav>

        {/* Kontakt */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Kontakt
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              E-post:{" "}
              <a href="mailto:hello@wizard.local" className="hover:underline">
                hello@wizard.local
              </a>
            </li>
            <li>Studenter • Øvingsnettsted</li>
          </ul>
        </div>

        {/* Følg oss */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Følg oss
          </h3>
          <div className="flex gap-3">
            {/* GitHub */}
            <a aria-label="GitHub" href="#" className="rounded p-2 ring-1 ring-neutral-300 hover:bg-neutral-50 dark:ring-neutral-700">
              {/* ... SVG code ... */}
            </a>
            {/* Twitter */}
            <a aria-label="Twitter" href="#" className="rounded p-2 ring-1 ring-neutral-300 hover:bg-neutral-50 dark:ring-neutral-700">
              {/* ... SVG code ... */}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className=" border-neutral-200/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-neutral-600 sm:flex-row">
          <p>{new Date().getFullYear()} Wizard of Web — laget for læring</p>
          <div className="flex items-center gap-3">
            <Link href="/Faginnhold" className="hover:underline">Faginnhold</Link>
            <span aria-hidden="true">·</span>
            <Link href="/Oppgaver" className="hover:underline">Oppgaver</Link>
            <a href="#top" className="rounded px-2 py-1 ring-1 ring-neutral-300 hover:bg-neutral-50 dark:ring-neutral-700">
              Til toppen
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
