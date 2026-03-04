import Badge from "@/src/components/base/Badge";
import Button from "@/src/components/base/Button";
import { CourseItem } from "../../../_utils/data/courses";
import { BookOpen, Clock, Star } from "lucide-react";

type Props = {
  course: CourseItem;
};

const CourseHero = ({ course }: Props) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="relative min-h-[300px] bg-cover bg-center lg:min-h-full"
          style={{ backgroundImage: `url(${course.image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute left-5 top-5 flex gap-3">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock size={13} />
              {course.duration} months
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <BookOpen size={13} />
              Course
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            MasterBrain Course Details
          </p>

          <h1 className="text-2xl font-extrabold leading-tight text-black md:text-4xl">
            {course.title}
          </h1>

          <div className="flex items-center gap-2 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm text-black/70">4.8 (120 Reviews)</span>
          </div>

          <p className="text-base leading-7 text-black/75">{course.description}</p>

          <div className="mt-3 rounded-2xl border border-black/10 bg-black/2 p-5">
            <p className="text-sm text-black/60">Monthly Fee</p>
            <p className="mt-1 text-3xl font-bold text-black">
              LKR {course.monthlyFee}
              <span className="ml-2 text-sm font-medium text-black/55">/ month</span>
            </p>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <Button variant="primary" size="md" className="rounded-full" href="/login">
              Enroll Now
            </Button>
            <Button variant="outline" size="md" className="rounded-full" href="/course">
              Back to Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
