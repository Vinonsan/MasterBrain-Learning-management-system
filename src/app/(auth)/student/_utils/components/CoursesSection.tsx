import Link from "next/link";

type EnrolledCourse = {
  name: string;
  progress: number;
};

type AvailableCourse = {
  name: string;
};

type Props = {
  enrolledCourses: EnrolledCourse[];
  availableCourses: AvailableCourse[];
};

const CoursesSection = ({ enrolledCourses, availableCourses }: Props) => {
  const hasCourses = enrolledCourses.length > 0;
  const courseList = hasCourses ? enrolledCourses : availableCourses;

  return (
    <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-dark">{hasCourses ? "My Courses" : "Available Courses"}</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {courseList.map((course) => (
          <div key={course.name} className="rounded-xl border border-black/10 p-4">
            <p className="font-semibold text-dark">{course.name}</p>

           

            <Link href="/course" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
              {hasCourses ? "Continue ->" : "Enroll ->"}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;

