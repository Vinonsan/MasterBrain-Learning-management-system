import Badge from "@/src/components/base/Badge";
import Button from "@/src/components/base/Button";
import SectionHeading from "@/src/components/layouts/SectionHeading";
import { courses } from "../course/_utils/data/courses";
import { Clock } from "lucide-react";

function PopularCourses() {
  return (
    <section className="py-20">
      <SectionHeading
        title="Explore Our Courses"
        subtitle="Browse our selection of expert-led IT subjects designed for both school students and aspiring developers."
        align="center"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {courses.slice(0, 6).map((course) => (
          <div
            key={course.id}
            className="group overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-44">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

              <Badge
                variant="secondary"
                className="absolute top-4 left-4 flex items-center gap-1 text-xs"
              >
                <Clock size={12} />
                {course.duration} months
              </Badge>
            </div>

            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-lg font-semibold text-black transition group-hover:text-primary">
                {course.title}
              </h2>

              <p className="line-clamp-2 text-sm text-black/70">{course.description}</p>

              <div className="mt-2 flex items-center justify-between border-t border-t-black/10 pt-4">
                <span className="text-lg font-bold text-black">
                  LKR {course.monthlyFee}
                  <span className="ml-1 text-sm font-medium text-black/60">/ month</span>
                </span>

                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-full"
                  href={`/course/${course.id}`}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {courses.length > 6 && (
        <div className="mt-12 flex justify-center">
          <Button variant="primary" size="lg" className="rounded-full" href="/course">
            View All Courses
          </Button>
        </div>
      )}
    </section>
  );
}

export default PopularCourses;
