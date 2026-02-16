import Link from "next/link";
import Image from "next/image";
import Badge from "@/src/components/base/Badge";

const STUDY_MATERIALS_URL = "/study-material";
const grades = [
  { title: "Grade 6", image: "/images/grade6.png", href: `${STUDY_MATERIALS_URL}/grades/6` },
  { title: "Grade 7", image: "/images/grade7.png", href: `${STUDY_MATERIALS_URL}/grades/7` },
  { title: "Grade 8", image: "/images/grade8.png", href: `${STUDY_MATERIALS_URL}/grades/8` },
  { title: "Grade 9", image: "/images/grade9.png", href: `${STUDY_MATERIALS_URL}/grades/9` },
  { title: "Grade 10", image: "/images/grade10.png", href: `${STUDY_MATERIALS_URL}/grades/10` },
  { title: "Grade 11", image: "/images/grade11.png", href: `${STUDY_MATERIALS_URL}/grades/11` },
  { title: "A/L ICT", image: "/images/al-ict.png", href: `${STUDY_MATERIALS_URL}/advance-level` },
];


const MainCategoryHero = () => {
  return (
    <section className="py-10">
      <div className="grid gap-8 lg:grid-cols-12 ">

        <div className="lg:col-span-4">
          <div
            className="h-122 rounded-2xl shadow-xl bg-cover bg-center flex flex-col justify-start py-4"
            style={{ backgroundImage: "url('/images/exam.png')" }}
          >
            <div className="flex flex-col justify-start items-center h-120 rounded-2xl gap-2 p-3 text-white bg-black/70">

              <Badge>
                Exam Papers Collection
              </Badge>
              <p className="text-base font-semibold text-center ">
                Practice papers for Science, Mathematics, English, and ICT for Grades 6–11 & A/L ICT
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {grades.map((grade) => (
              <Link
                key={grade.title}
                href={grade.href}
                className="rounded-2xl bg-white border border-black/10 shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="relative h-44">
                  <Image
                    src={grade.image}
                    alt={grade.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800">
                    {grade.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategoryHero;
