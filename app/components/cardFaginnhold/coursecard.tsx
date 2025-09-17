// components/CourseCard.tsx
import Image from "next/image";
import Link from "next/link";
// Nếu bạn chưa cấu hình alias "@", đổi đường dẫn này thành: "../../app/faginnhold/courses"

import type { Course } from "@/app/faginnhold/course";
function levelTone(level: Course["level"]) {
  switch (level) {
    case "Beginner":
      return "bg-emerald-600";
    case "Intermediate":
      return "bg-indigo-600";
    default:
      return "bg-rose-600";
  }
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={course.href ?? "#"}
      className="group block overflow-hidden rounded-2xl border bg-black/10 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-neutral-900/70"
    >
      <div className="relative h-36 w-full">
        {course.video ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={course.video}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            // poster hiển thị khi video chưa phát/đang loading
            poster={course.poster}
            aria-label={course.title}
          />
        ) : (
          course.image && (
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover transition group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 33vw"
              // Có thể bỏ optimizer nếu dùng ảnh local tạm thời:
              // unoptimized
            />
          )
        )}
      </div>

      <div className="flex flex-col gap-2 p-3">
        <div className="text-[11px] uppercase tracking-widest text-neutral-400">
          Course
        </div>

        <h3 className="line-clamp-1 text-base font-semibold">{course.title}</h3>

        <p className="line-clamp-2 text-xs text-neutral-250 dark:text-neutral-300">
          {course.blurb}
        </p>

        <div className="mt-1 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-white ${levelTone(
              course.level
            )}`}
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/80" />
            {course.level}
          </span>

          <span className="ml-auto text-xs text-neutral-500 group-hover:underline">
            Åpne →
          </span>
        </div>
      </div>
    </Link>
  );
}
