import Image from "next/image";

type Instructor = {
  image: string;
  name: string;
  jobTitle: string;
  description: string;
};

type Props = {
  instructor: Instructor;
};

const CourseInstructor = ({ instructor }: Props) => {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Instructor</h2>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">

        {/* Profile Image */}
        <div className="relative h-28 w-28 shrink-0">
          <Image
            src={instructor.image}
            alt={instructor.name}
            fill
            sizes="112px"
            className="rounded-full object-cover border border-black/10 shadow-md"
          />
        </div>

        {/* Instructor Info */}
        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">
              {instructor.name}
            </h3>

            <p className="text-sm font-medium text-primary">
              {instructor.jobTitle}
            </p>
          </div>

          <p className="mt-5 text-sm leading-6 text-black/70">
            {instructor.description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default CourseInstructor;