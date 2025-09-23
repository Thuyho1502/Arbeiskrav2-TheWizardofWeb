import Link from "next/link";
import type { CourseCardModel } from "@/app/faginnhold/course";

function levelTone(level?: CourseCardModel["level"]) {
  switch (level) {
    case "Beginner":
      return "bg-emerald-600";
    case "Intermediate":
      return "bg-indigo-600";
    case "Advanced":
      return "bg-rose-600";
    default:
      return "bg-neutral-500";
  }
}

export default function CourseCard({ course }: { course: CourseCardModel }) {
  const to = course.href ?? `/faginnhold/${course.slug}`;

  return (
    <Link
      href={to}
      className="
        group block overflow-hidden rounded-2xl
        border border-white/10
        bg-black ring-1 ring-white/5
        shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
      "
    >
      {/* media header */}
      <div className="relative h-36 w-full">
        {course.video && (
          <video
            className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.02]"
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-label={course.title}
          >
            <source src={course.video} type="video/mp4" />
          </video>
        )}
        {/* phủ mờ nhẹ để card trông đồng nhất trên nền đen */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* body */}
      <div className="flex flex-col gap-2 p-3">
        <div className="text-[11px] uppercase tracking-widest text-white/50">
          Course
        </div>

        <h3 className="line-clamp-1 text-base font-semibold text-white">
          {course.title}
        </h3>

        {course.blurb && (
          <p className="line-clamp-2 text-xs text-white/70">
            {course.blurb}
          </p>
        )}

        <div className="mt-1 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-white ${levelTone(
              course.level
            )}`}
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/80" />
            {course.level ?? "Course"}
          </span>

          <span className="ml-auto text-xs text-white/60 group-hover:underline">
            Åpne →
          </span>
        </div>
      </div>
    </Link>
  );
}
