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
    `relative px-5 py-3 text-lg font-medium transition-colors duration-300 ${
      pathname === path
        ? "text-white font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
        : "text-indigo-600  hover:text-indigo-400"
    }`;

  return (
    <div>
        <header>
          <nav className="flex justify-between items-center p-4 px-20 bg-black shadow-md gap-12">
          <div className="flex items-center gap-6">
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
          <div className="flex gap-20">
            <Link href="/" className={linkStyle("/")}>Forside</Link>
            <Link href="/faginnhold" className={linkStyle("/faginnhold")}>Faginnhold</Link>
            <Link href="/Oppgaver" className={linkStyle("/Oppgaver")}>Oppgave</Link>
         </div>
          
      
        </nav>
        </header>
    </div>
    
  );
}
