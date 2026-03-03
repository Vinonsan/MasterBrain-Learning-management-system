export type Review = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
};

export type CourseItem = {
  id: string;
  title: string;
  description: string;
  duration: string;
  monthlyFee: string;
  image: string;
  videoRecordings: string[];
  learnings: string[];
  instructor: {
    image: string;
    name: string;
    jobTitle: string;
    description: string;
  };
  reviews: Review[];
};

export const courses: CourseItem[] = [
  {
    id: "al-ict",
    title: "A/L ICT - Information & Communication Technology",
    description:
      "This course is designed according to the A/L ICT syllabus, covering computer hardware, software, networking, data representation, databases, and programming basics. Students build strong conceptual understanding with exam-focused practice and practical exposure.",
    duration: "4",
    monthlyFee: "1500",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    videoRecordings: [
      "DRIVE_FILE_ID_1",
      "DRIVE_FILE_ID_2",
      "DRIVE_FILE_ID_3",
      "DRIVE_FILE_ID_4",
      "DRIVE_FILE_ID_5",
      "DRIVE_FILE_ID_6",
    ],
    learnings: [
      "Comprehensive coverage of the A/L ICT syllabus",
      "Strong conceptual understanding of ICT topics",
      "Exam-focused practice and guidance",
      "Practical exposure to real-world ICT applications",
    ],
    instructor: {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "John Doe",
      jobTitle: "ICT Educator",
      description:
        "John has over 10 years of experience teaching ICT at the A/L level. He is passionate about making complex concepts accessible and engaging for students, helping them excel in their exams and develop a love for technology.",
    },
    reviews: [
      {
        id: "review1",
        name: "Alice Johnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        comment: "This course was amazing! It made the A/L ICT syllabus so much easier to understand.",
        date: "2024-05-01",
      },
      {
        id: "review2",
        name: "Bob Smith",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",        rating: 4,
        comment: "Great course with clear explanations. The practical examples were really helpful.",
        date: "2024-05-10",
      },
    ],  
  },
  {
    id: "react-js",
    title: "React.js - Modern Frontend Development",
    description:
      "This course focuses on building modern user interfaces with React.js. Learners master components, JSX, props, state, hooks, and scalable app structure to build reusable and production-ready frontend projects.",
    duration: "4",
    monthlyFee: "4000",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    videoRecordings: [
      "14hiYjjKBY9CWlKsTGFC9AL_AcoCLuzbo",
      "14hiYjjKBY9CWlKsTGFC9AL_AcoCLuzbo",
      "14hiYjjKBY9CWlKsTGFC9AL_AcoCLuzbo",
      "14hiYjjKBY9CWlKsTGFC9AL_AcoCLuzbo",
      "14hiYjjKBY9CWlKsTGFC9AL_AcoCLuzbo",
      "14hiYjjKBY9CWlKsTGFC9AL_AcoCLuzbo",
    ],
    learnings: [
      "Core React concepts: components, JSX, props, state, hooks",
      "Building reusable UI components",
      "Managing application state effectively",
      "Structuring real-world frontend applications",
    ],
    instructor: {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "Jane Smith",
      jobTitle: "Frontend Developer",
      description:
        "Jane is a seasoned frontend developer with expertise in React.js. With over 8 years of experience, she has worked on numerous projects ranging from startups to large enterprises. Jane is dedicated to teaching best practices and helping students build a strong foundation in modern frontend development.",
    },
    reviews: [
      {
        id: "review1",
        name: "Alice Johnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        comment: "This course was amazing! It made the A/L ICT syllabus so much easier to understand.",
        date: "2024-05-01",
      },
      {
        id: "review2",
        name: "Bob Smith",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",        rating: 4,
        comment: "Great course with clear explanations. The practical examples were really helpful.",
        date: "2024-05-10",
      },
    ],  
  },
  {
    id: "next-js",
    title: "Next.js - Modern Full-Stack Web Development",
    description:
      "This course teaches production-ready full-stack development with Next.js, including routing, layouts, SSR, SSG, API routes, SEO best practices, and deployment strategies for fast and scalable applications.",
    duration: "4",
    monthlyFee: "4000",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    videoRecordings: [
      "DRIVE_FILE_ID_1",
      "DRIVE_FILE_ID_2",
      "DRIVE_FILE_ID_3",
      "DRIVE_FILE_ID_4",
      "DRIVE_FILE_ID_5",
      "DRIVE_FILE_ID_6",
    ],
    learnings: [
      "Building production-ready applications with Next.js",
      "Routing, layouts, and server-side rendering (SSR)",
      "Static site generation (SSG) and API routes",
      "SEO best practices and deployment strategies",
    ],
    instructor: {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "Emily Johnson",
      jobTitle: "Full-Stack Developer",
      description:
        "Emily is a full-stack developer specializing in Next.js and modern web technologies. With over 7 years of experience, she has built scalable applications for various industries. Emily is passionate about teaching and empowering students to create high-quality web applications using Next.js.",
    },
    reviews: [
      {
        id: "review1",
        name: "Alice Johnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        comment: "This course was amazing! It made the A/L ICT syllabus so much easier to understand.",
        date: "2024-05-01",
      },
      {
        id: "review2",
        name: "Bob Smith",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",        rating: 4,
        comment: "Great course with clear explanations. The practical examples were really helpful.",
        date: "2024-05-10",
      },
    ],  
  },
  {
    id: "dotnet-csharp",
    title: ".NET - Modern Backend Development with C#",
    description:
      "This course provides a strong backend foundation with .NET and C#. Students build APIs, work with databases, and apply authentication, clean architecture, and secure coding practices for enterprise development.",
    duration: "4",
    monthlyFee: "4000",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    videoRecordings: [
      "DRIVE_FILE_ID_1",
      "DRIVE_FILE_ID_2",
      "DRIVE_FILE_ID_3",
      "DRIVE_FILE_ID_4",
      "DRIVE_FILE_ID_5",
      "DRIVE_FILE_ID_6",
    ],
    learnings: [
      "Backend development with .NET and C#",
      "Building RESTful APIs and working with databases",
      "Authentication, clean architecture, and security",
      "Preparing for enterprise-level backend roles",
    ],
    instructor: {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "Michael Brown",
      jobTitle: "Backend Developer",
      description:
        "Michael is an experienced backend developer with expertise in .NET and C#. With over 10 years of experience, he has worked on complex backend systems for various industries. Michael is committed to teaching best practices and helping students build a strong foundation in modern backend development.",
    },
    reviews: [
      {
        id: "review1",
        name: "Alice Johnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        comment: "This course was amazing! It made the A/L ICT syllabus so much easier to understand.",
        date: "2024-05-01",
      },
      {
        id: "review2",
        name: "Bob Smith",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",        rating: 4,
        comment: "Great course with clear explanations. The practical examples were really helpful.",
        date: "2024-05-10",
      },
    ],  
  },
  {
    id: "node-js",
    title: "Node.js - Scalable Server-Side Development",
    description:
      "This course covers backend development with Node.js and Express, including asynchronous programming, REST APIs, database integration, and authentication for scalable modern applications.",
    duration: "4",
    monthlyFee: "4000",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    videoRecordings: [
      "DRIVE_FILE_ID_1",
      "DRIVE_FILE_ID_2",
      "DRIVE_FILE_ID_3",
      "DRIVE_FILE_ID_4",
      "DRIVE_FILE_ID_5",
      "DRIVE_FILE_ID_6",
    ],
    learnings: [
      "Server-side development with Node.js and Express",
      "Asynchronous programming and non-blocking I/O",
      "Building REST APIs and integrating databases",
      "Authentication and authorization for modern backends",
    ],
    instructor: {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "Sarah Lee",
      jobTitle: "Backend Developer",
      description:
        "Sarah is a skilled backend developer with expertise in Node.js and Express. With over 6 years of experience, she has built scalable server-side applications for various industries. Sarah is passionate about teaching and helping students master backend development with Node.js.",
    },
    reviews: [
      {
        id: "review1",
        name: "Alice Johnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        comment: "This course was amazing! It made the A/L ICT syllabus so much easier to understand.",
        date: "2024-05-01",
      },
      {
        id: "review2",
        name: "Bob Smith",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",        rating: 4,
        comment: "Great course with clear explanations. The practical examples were really helpful.",
        date: "2024-05-10",
      },
    ],  
  },
];

export function getCourseById(id: string) {
  return courses.find((course) => course.id === id);
}
