// app/faginnhold/[slug]/page.tsx
import { notFound } from "next/navigation";
import { COURSE_CONTENT } from "../coursecontent";
import ClientOverview from "./ClientOverview";

type Params = { slug: string };

export default async function CourseOverviewPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params; 

  const course = COURSE_CONTENT[slug];
  if (!course) return notFound();

  return <ClientOverview slug={slug} course={course} />;
}
