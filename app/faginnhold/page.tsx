// app/Faginnhold/page.tsx
import Image from "next/image";
import Link from "next/link";
import CourseCard from "../components/faginnhold/coursecard";
import { COURSES } from "./course";

export default function Faginnhold() {
  return (
    <section className="min-h-screen">
      {/* HERO giống style tham chiếu */}
      <div className="relative isolate">
        {/* Ảnh nền hero (đặt file vào /public/hero/faginnhold-hero.jpg) */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-none md:h-[360px]">
          <Image
            src="/hero/faginnhold-hero.jpg" 
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10">
            <p className="text-sm text-white/80">Explore the world of</p>
            <h1 className="mt-1 text-4xl font-extrabold text-white drop-shadow">
              Wizard of Web
            </h1>
            <p className="mt-2 max-w-2xl text-white/90">
              Start your coding journey with short notes and hands-on exercises.
              Explore for free ✨
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="/Oppgaver"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
              >
                Start learning
              </Link>
              <Link
                href="/"
                className="rounded-md border border-white/60 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* GRID KHÓA HỌC */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-xl font-bold">Kurs</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
