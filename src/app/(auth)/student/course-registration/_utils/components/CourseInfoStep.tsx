"use client";

import Input from "@/src/components/base/Input";
import { CourseItem } from "@/src/app/(site)/course/_utils/data/courses";

type Props = {
  studentId: string;
  setStudentId: (_value: string) => void;
  courseId: string;
  setCourseId: (_value: string) => void;
  courseList: CourseItem[];
  selectedCourse?: CourseItem;
};

const CourseInfoStep = ({
  studentId,
  setStudentId,
  courseId,
  setCourseId,
  courseList,
  selectedCourse,
}: Props) => {
  return (
    <div className="space-y-4">
      <Input
        id="studentId"
        label="Student ID"
        type="text"
        value={studentId}
        onChange={(value) => setStudentId(String(value))}
        required
      />

      <div>
        <label htmlFor="courseId" className="mb-1 block text-sm font-medium text-gray-700">
          Course
        </label>
        <select
          id="courseId"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary"
        >
          <option value="">Select a course</option>
          {courseList.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      {selectedCourse && (
        <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 text-sm">
          <p className="font-semibold text-dark">{selectedCourse.title}</p>
          <p className="mt-1 text-zinc-600">Duration: {selectedCourse.duration} months</p>
          <p className="text-zinc-600">Monthly Fee: LKR {selectedCourse.monthlyFee}</p>
        </div>
      )}
    </div>
  );
};

export default CourseInfoStep;

