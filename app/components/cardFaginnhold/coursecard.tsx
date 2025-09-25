// components/CourseCard.tsx
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
    case "Comming soon": // chuẩn chính tả
    // case "Comming soon": // nếu còn dữ liệu cũ, có thể giữ dòng này
      return "bg-neutral-600";
    default:
      return "bg-neutral-500";
  }
}

/** Xác định card có bị vô hiệu hóa không */
function isDisabled(course: CourseCardModel) {
  // hỗ trợ cả 2 cách: có cờ disabled/comingSoon hoặc dùng level "Coming soon"
  return (course as any).disabled === true
    || (course as any).comingSoon === true
    || course.level === "Comming soon"
    || (course as any).level === "Comming soon"; // nếu còn dữ liệu cũ
}

export default function CourseCard({ course }: { course: CourseCardModel }) {
  const disabled = isDisabled(course);
  const to = course.href ?? `/faginnhold/${course.slug}`;

  const CardInner = (
    <div
      className={[
        "group block overflow-hidden rounded-2xl border shadow-sm ring-1 transition",
        // card trắng để nổi bật trên nền trang đen
        "bg-white text-neutral-900 border-black/5 ring-black/5",
        "hover:bg-gradient-to-br from-indigo-500 to-emerald-500 text-white font-black",
        disabled
          ? "opacity-60 cursor-not-allowed pointer-events-none"
          : "hover:-translate-y-0.5 hover:shadow-md",
      ].join(" ")}
    >
      {/* media */}
      <div className="relative h-36 w-full">
        {course.video ? (
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
        ) : (
          // fallback khi không có video
          <div className="h-full w-full bg-neutral-100" />
        )}
      </div>

      {/* content */}
      <div className="flex flex-col gap-2 p-3">
        <div className="text-[11px] uppercase tracking-widest text-neutral-400">
          Course
        </div>

        <h3 className="line-clamp-1 text-base font-semibold">{course.title}</h3>

        {course.blurb && (
          <p className="line-clamp-2 text-xs text-neutral-600">
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

          {/* Badge/CTA bên phải */}
          {disabled ? (
            <span className="ml-auto text-xs text-neutral-500">
              Coming soon
            </span>
          ) : (
            <span className="ml-auto text-xs text-neutral-600 group-hover:underline">
              Open →
            </span>
          )}
        </div>
      </div>
    </div>
  );

  // Chỉ bọc Link khi KHÔNG disabled
  return disabled ? CardInner : <Link href={to}>{CardInner}</Link>;
}
