import Link from "next/link";
import Image from "next/image";
import Badge from "@/src/components/base/Badge";
import Button from "@/src/components/base/Button";

const courses = [
    {
        title: "React & Next.js",
        image: "/images/react-next.png",
        description:
            "Build modern, high-performance web apps using React, Next.js, and industry best practices.",
        href: "/courses/react-nextjs",
    },
    {
        title: "Full-Stack Web Development",
        image: "/images/web-dev.png",
        description:
            "HTML, CSS, JavaScript, React, APIs, and real-world project-based learning.",
        href: "/courses/web-development",
    },
    {
        title: ".NET Backend Development",
        image: "/images/dotnet.png",
        description:
            "Create secure and scalable backend APIs using ASP.NET Core and SQL Server.",
        href: "/courses/dotnet-backend",
    },
    {
        title: "JavaScript Programming",
        image: "/images/javascript.png",
        description:
            "Master JavaScript fundamentals, ES6+, async programming, and clean code.",
        href: "/courses/javascript",
    },
];

const Programming = () => {
    return (
        <section className="py-12">
            <div className="grid gap-8 lg:grid-cols-12">

                <div className="lg:col-span-4">
                    <div
                        className="h-full min-h-125 rounded-2xl shadow-xl bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/programming.png')" }}
                    >
                        <div className="flex h-full flex-col items-center justify-start gap-4 rounded-2xl bg-black/50 p-6 text-white">
                            <Badge>Programming Courses</Badge>

                            <h2 className="text-xl font-semibold text-center">
                                Learn Industry-Ready Skills
                            </h2>

                            <p className="text-sm text-center text-white/90">
                                Live and practical programming courses covering React, Next.js,
                                Full-Stack Web Development, and .NET backend development.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                        {courses.map((course) => (
                            <div
                                key={course.title}
                                className="group flex flex-col rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-xl"
                            >

                                <div className="relative h-40 rounded-t-2xl bg-gray-50">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-contain p-6"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col p-5">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {course.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-600 flex-1">
                                        {course.description}
                                    </p>


                                    <Button
                                        variant="primary"
                                        className="mt-4 rounded-full"
                                    >
                                        <Link href={course.href}>
                                            View Course Materials
                                        </Link>
                                    </Button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programming;
