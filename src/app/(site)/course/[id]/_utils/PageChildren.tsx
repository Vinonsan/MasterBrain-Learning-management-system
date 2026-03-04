import { CourseItem } from "../../_utils/data/courses";
import CourseHero from "./components/CourseHero";
import CourseInstructor from "./components/CourseInstructor";
import CourseReviews from "./components/CourseReviews";
import CourseVideos from "./components/CourseVideos";
import MobileEnrollBar from "./components/MobileEnrollBar";
import WhatYouWillLearn from "./components/WhatYouWillLearn";

type Props = {
  course: CourseItem;
};

const PageChildren = ({ course }: Props) => {
  return (
    <section className="py-10">
      <div className="flex flex-col gap-6">
        <CourseHero course={course} />
        <CourseVideos courseId={course.id} videoRecordings={course.videoRecordings} />
        <WhatYouWillLearn learnings={course.learnings} />
        <CourseInstructor instructor={course.instructor}  />
        <CourseReviews reviews={course.reviews} />
      </div>

      <MobileEnrollBar monthlyFee={course.monthlyFee} />
    </section>
  );
};

export default PageChildren;
