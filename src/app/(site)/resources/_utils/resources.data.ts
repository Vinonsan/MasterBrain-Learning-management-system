export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  content: string;
};

export const resourceItems: ResourceItem[] = [
  {
    slug: "al-ict-past-papers",
    title: "A/L ICT Past Papers",
    description:
      "Download curated past papers with marking schemes to prepare for exams with confidence.",
    tag: "Exam Prep",
    content:
      "This section can include year-wise papers, marking schemes, and topic indexing for faster revision.",
  },
  {
  slug: "al-ict-notes",
  title: "A/L ICT Notes",
  description:
    "Access comprehensive Advanced Level ICT notes designed to support learning, revision, and exam preparation.",
  tag: "Study",
  content:
    "This section provides well-structured A/L ICT notes covering key concepts, theories, and important topics to help students understand lessons clearly and prepare effectively for examinations.",
},
  {
    slug: "web-development-roadmaps",
    title: "Web Development Roadmaps",
    description:
      "Follow structured learning paths for HTML, CSS, JavaScript, React, and Next.js.",
    tag: "Career",
    content:
      "Use this roadmap to move from fundamentals to advanced frontend and full-stack development with milestones.",
  },
  {
    slug: "project-starter-kits",
    title: "Project Starter Kits",
    description:
      "Get starter templates and practice tasks to build portfolio-ready applications.",
    tag: "Practical",
    content:
      "Starter kits can include project briefs, folder structures, and extension tasks for practical coding skills.",
  },
];
