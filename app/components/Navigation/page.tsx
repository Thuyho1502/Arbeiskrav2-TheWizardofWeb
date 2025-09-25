"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `relative px-4 py-3 text-xl uppercase tracking-wider font-bold transition-colors duration-300 ${
      pathname === path
        ? "text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-white"
        : "text-indigo-400 hover:text-indigo-200"
    }`;

  return (
    <header>
      <nav className="bg-black shadow-md w-full">
        {/* Responsive wrapper grid */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-6 items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <span
              aria-hidden="true"
              className={`${pixelFont.className} inline-flex text-2xl h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-emerald-500 text-white font-black`}
            >
              W
            </span>
            <span
              className={`${pixelFont.className} text-xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent`}
            >
              WIZARD
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex justify-center sm:justify-end flex-wrap gap-6">
            <Link href="/" className={linkStyle("/")}>
              Home
            </Link>
            <Link href="/faginnhold" className={linkStyle("/faginnhold")}>
              Courses
            </Link>
            <Link href="/Oppgaver" className={linkStyle("/Oppgaver")}>
              Challenge
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
