import { BookOpen, PlayCircle, Video } from "lucide-react";

type Course = {
  name: string;
};

type LiveClass = {
  title: string;
  date: string;
};

type Recording = {
  title: string;
};

type Props = {
  enrolledCourses: Course[];
  liveClasses: LiveClass[];
  recordings: Recording[];
};

const OverviewGridSection = ({ enrolledCourses, liveClasses, recordings }: Props) => {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <PlayCircle className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-dark">Continue Learning</h3>
        </div>
        <div className="mt-3 space-y-2 text-sm">
          {enrolledCourses.map((course) => (
            <p key={course.name} className="text-zinc-600">
              {course.name}
            </p>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Video className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-dark">Upcoming Live Classes</h3>
        </div>
        <div className="mt-3 space-y-2 text-sm">
          {liveClasses.map((item) => (
            <div key={item.title}>
              <p className="font-medium text-dark">{item.title}</p>
              <p className="text-xs text-zinc-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-dark">Recent Recordings</h3>
        </div>
        <div className="mt-3 space-y-2 text-sm">
          {recordings.map((item) => (
            <p key={item.title} className="text-zinc-600">
              {item.title}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewGridSection;

