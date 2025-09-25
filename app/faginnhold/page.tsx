// app/Faginnhold/page.tsx
import Image from "next/image";
import Link from "next/link";
import CourseCard from "../components/cardFaginnhold/coursecard";
import { COURSES } from "./course";
import { Press_Start_2P } from "next/font/google";

export const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Faginnhold() {
  return (
    <main className="min-h-screen bg-neutral-900 ">
      <section className="min-h-screen ">
        {/* HERO section */}
        <div className="relative isolate w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black">
          {/* Hero background video */}
          <div className="relative h-[36vh] min-h-[220px] md:h-[44vh] lg:h-[52vh] overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover" // cover background
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src="/image/herobilder.mp4" type="video/mp4" />
              {/* Fallback if browser does not support video */}
              Your browser does not support the video tag.
            </video>
            {/* gradient overlay for readability */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            {/* hero content */}
            <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-6xl px-4 pb-10">
              <p className="text-sm text-white/80">Explore the world of</p>
              <h1 className={`${pixelFont.className} text-2xl text-white`}>
                Wizard of Web
              </h1>
              <p className="mt-2 max-w-2xl text-white/90">
                Start your coding journey with short notes and hands-on
                exercises. Explore for free!
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  href="/"
                  className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Home
                </Link>
                <Link
                  href="/Oppgaver"
                  className="rounded-md border border-white/60 px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  Challenge
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* COURSES GRID */}
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2
            className={`${pixelFont.className} mb-4 text-2xl font-bold text-white`}
          >
            Courses
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
