import Link from "next/link";
import { COURSES } from "../faginnhold/course";
import CourseCard from "../components/cardFaginnhold/coursecard";
export default function Oppgaver(){
    return(
        <div className="bg-black/90 text-white">
            <section className="min-h-screen ">
      {/* HERO giống style tham chiếu */}
      <div className="relative isolate w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white/40">
        {/* Ảnh nền hero (đặt file vào /public/hero/faginnhold-hero.jpg) */}
        <div className="relative h-[36vh] min-h-[220px] md:h-[44vh] lg:h-[52vh] overflow-hidden">
          
          {/* phủ gradient để chữ dễ đọc */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          {/* nội dung hero */}
          <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-6xl px-4 pb-10">
           
            <h1 className="mt-1 text-4xl font-extrabold text-white drop-shadow">
             Challenge Packs
            </h1>
            <p className="mt-2 max-w-2xl text-white/90">
              Practice your coding reps while earning XP! Complete a pack of code challenges to test your
                knowledge of programming concepts as you learn on Codédex.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="/"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
              >
                Home
              </Link>
              <Link
                href="/faginnhold"
                className="rounded-md border border-white/60 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Faginnhold
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* GRID KHÓA HỌC */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-2xl font-bold">Kurs</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </div>
    </section>
   
        </div>
     );
}