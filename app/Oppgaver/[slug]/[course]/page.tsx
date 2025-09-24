import { notFound } from "next/navigation";
import { COURSE_CONTENT } from "@/app/faginnhold/coursecontent";

export default function OppgaverCoursePage({
  params,
}: { params: { course: string } }) {
  // chuẩn hoá về chữ thường để so sánh
  const slug = params.course.toLowerCase();

  const course = Object.values(COURSE_CONTENT).find(
    (c) => c.slug.toLowerCase() === slug
  );
  if (!course) return notFound();

  // TODO: render danh sách bài tập của môn này
  return (
    <main className="min-h-[70vh] text-white p-6">
      <h1 className="text-2xl font-bold">Oppgaver – {course.title}</h1>
      <p className="text-white/70 mt-2">
        Đây là trang bài tập cho môn <b>{course.title}</b>.
      </p>
      {/* render assignments ở đây */}
    </main>
  );
}