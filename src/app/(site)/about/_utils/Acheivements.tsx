import SectionHeading from "@/src/components/layouts/SectionHeading";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

const Acheivements =()=> {
  const achievements = [
    {
      icon: Users,
      value: "50+",
      label: "Students Trained",
      description: "Empowered thousands of students",
    },
    {
      icon: BookOpen,
      value: "10",
      label: "Expert Courses",
      description: "Comprehensive curriculum",
    },
    {
      icon: TrendingUp,
      value: "80%",
      label: "Success Rate",
      description: "Outstanding results",
    },
    {
      icon: Award,
      value: "100%",
      label: "Tamil Medium",
      description: "Fully accessible education",
    },
  ];

  return (
    <section className="py-8" id="achievements">
    
    <SectionHeading
          title="Our Achievements"
          align="center"
        />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;

          return (
            <div
              key={achievement.label}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md
                         transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                         hover:border-primary/30 overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-1.5 rounded-t-3xl bg-primary" />

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                              bg-primary/10 transition-transform duration-300
                              group-hover:scale-110">
                <Icon className="w-8 h-8 text-primary" />
              </div>

              <div className="text-4xl md:text-5xl font-black mb-2 text-primary">
                {achievement.value}
              </div>

              <h4 className="text-lg font-bold mb-2 text-dark">
                {achievement.label}
              </h4>

              <p className="text-sm leading-relaxed text-dark/70">
                {achievement.description}
              </p>

              <span className="absolute bottom-4 right-4 w-16 h-16 rounded-full
                               bg-primary opacity-5 group-hover:opacity-10
                               transition-opacity" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Acheivements