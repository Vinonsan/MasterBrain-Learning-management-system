import React from 'react'
import Badge from '@/src/components/base/Badge'
import Button from '@/src/components/base/Button'
import SectionHeading from '@/src/components/layouts/SectionHeading'
import { Clock } from 'lucide-react'

const courses = [
    {
    title: "A/L ICT – Information & Communication Technology",
    description:
      "This course is designed according to the A/L ICT syllabus, covering fundamental concepts such as computer hardware, software, networking, data representation, databases, and basic programming. Students will develop strong conceptual knowledge as well as problem-solving skills required for examinations, while also gaining practical exposure to real-world ICT applications.",
    duration: "4",
    monthlyFee: "1500",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    title: "React.js – Modern Frontend Development",
    description:
      "This course focuses on building modern, scalable user interfaces using React.js. Learners will understand core concepts such as components, JSX, props, state management, hooks, and component lifecycle. By the end of the course, students will be able to build reusable UI components, manage application state efficiently, and structure real-world frontend applications following best practices used in the industry.",
    duration: "4",
    monthlyFee: "4000",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },

  {
    title: "Next.js – Modern Full-Stack web Development",
    description:
      "This course teaches how to build production-ready web applications using Next.js. Students will learn server-side rendering (SSR), static site generation (SSG), API routes, routing, layouts, and performance optimization. The course also covers SEO best practices and deployment strategies, enabling learners to create fast, scalable, and SEO-friendly applications suitable for enterprise use.",
    duration: "4",
    monthlyFee: "4000",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },

  {
    title: ".NET – Modern Backend Development with C#",
    description:
      "This course provides a solid foundation in backend development using the .NET platform and C#. Learners will gain hands-on experience building RESTful APIs, working with databases, handling authentication, and implementing business logic. Emphasis is placed on clean architecture, performance, and security, preparing students for enterprise-level backend development roles.",
    duration: "4",
    monthlyFee: "4000",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },

  {
    title: "Node.js – Scalable Server-Side Development",
    description:
      "This course covers server-side development using Node.js and JavaScript. Students will learn how Node.js handles asynchronous operations, build REST APIs using Express.js, integrate databases, and manage authentication and authorization. The course emphasizes writing scalable, non-blocking applications suitable for modern web and mobile backends.",
    duration: "4",
    monthlyFee: "4000",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const Course = () => {
  return (
    <section className='py-8'>
      <SectionHeading
        title="Our Courses"
        subtitle="Explore our ICT and IT courses designed for students and aspiring software engineers."
        align="center"
      />

      <div className="grid gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
          >
            <div className="relative h-44">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

              <Badge
                variant="secondary"
                className="absolute top-4 left-4 text-xs flex items-center gap-1"
              >
                <Clock size={12} />
                {course.duration} months
              </Badge>
            </div>

            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-lg font-semibold text-black group-hover:text-primary transition">
                {course.title}
              </h2>

              <p className="text-sm text-black/70 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center justify-between pt-4 mt-2 border-t border-t-black/10">
                <span className="text-lg font-bold text-black">
                  LKR {course.monthlyFee}
                  <span className="text-sm font-medium text-black/60 ml-1">
                    / month
                  </span>
                </span>

                <Button variant="primary" size="sm" className="rounded-full">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Course
