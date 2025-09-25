import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import CourseCard from "./components/cardFaginnhold/coursecard";
import { COURSES } from "./faginnhold/course";

export const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="bg-black/90 text-white">
      <section className="relative w-full h-110 overflow-hidden">
        {/* Background video */}
        <video
          src="/video/hero.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/15"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-6xl mx-auto px-4 gap-6">
          <h1 className={`${pixelFont.className} text-2xl text-white`}>
            Learn programming faster and more effectively
          </h1>
          <p className="text-lg text-shadow-gray-200 ">
            From beginner to pro — start your journey here
          </p>
          <a href="/faginnhold">
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md font-semibold text-10">
              Start learning
            </button>
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-7 pb-10">
        <h2
          className={`${pixelFont.className} } text-2xl p-6 text-center tracking-wider bg-gradient-to-r 
        from-indigo-500 to-emerald-500 bg-clip-text text-transparent`}
        >
          Journey through the world of programming
        </h2>
        <p className="text-center">
          Learn to code with fun, interactive courses handcrafted by industry
          experts and teachers.
        </p>

        <div className="mx-auto py-5">
          <div className="grid grid-cols-3 gap-6 ">
            {COURSES.slice(0, 3).map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <a href="/faginnhold">
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md font-semibold">
              Explore all courses
            </button>
          </a>
        </div>
      </section>
      <section className="bg-black/40 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/image/bilde.webp"
              alt="Code"
              width={600}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2
              className={`${pixelFont.className} }text-2xl md:text-4xl font-bold mb-6 font-mono`}
            >
              Level up your learning
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Gain XP and collect badges as you complete bite-sized lessons in
              Python, HTML, JavaScript, and more. Our beginner-friendly
              curriculum makes learning to code as motivating as completing your
              next quest.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-30">
          <div>
            <h2
              className={`${pixelFont.className} }text-2xl md:text-4xl font-bold mb-6 font-mono`}
            >
              Practice your coding skills
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Take your skills further with coding challenges and project
              tutorials designed to help you apply what you’ve learned to
              real-world problems and examples.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/image/bilde.webp"
              alt="Code"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
