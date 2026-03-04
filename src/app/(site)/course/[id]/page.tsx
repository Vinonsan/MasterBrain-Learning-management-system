import { notFound } from "next/navigation";
import PageChildren from "./_utils/PageChildren";
import { courses, getCourseById } from "../_utils/data/courses";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="px-8">
      <PageChildren course={course} />
    </main>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}
