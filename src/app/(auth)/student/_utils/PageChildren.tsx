import CoursesSection from "./components/CoursesSection";
import OverviewGridSection from "./components/OverviewGridSection";
import TasksSection from "./components/TasksSection";
import WelcomeSection from "./components/WelcomeSection";
import { availableCourses, enrolledCourses, liveClasses, recordings, tasks } from "./data/dashboardData";

const PageChildren = () => {
  return (
    <div className="space-y-6">
      <WelcomeSection />
      <CoursesSection enrolledCourses={enrolledCourses} availableCourses={availableCourses} />
      <OverviewGridSection
        enrolledCourses={enrolledCourses}
        liveClasses={liveClasses}
        recordings={recordings}
      />
      <TasksSection tasks={tasks} />
    </div>
  );
};

export default PageChildren;
