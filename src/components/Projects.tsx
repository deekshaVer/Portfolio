import Image from "next/image";
import CareerForgeImage from "../../public/careerForgeImg.png";
import TaskPilotImage from "../../public/taskPilotImg.png";

const projects = [
  {
    title: "CareerForge AI",
    description:
      "AI-powered platform to generate resumes, cover letters, and interview prep tailored to user profiles. Architected a scalable backend using Next.js, Prisma ORM, and NeonDB, with secure authentication via Clerk for efficient user data handling. Engineered dynamic content generation workflows that adapt outputs based on user inputs, improving relevance and reducing manual effort in job application preparation.",
    tech: [
      "Next.js",
      "Tailwind",
      "Prisma",
      "Gemini AI",
      "Clerk",
      "Recharts",
      "PostgreSQL",
    ],
    link: "https://career-forge-ai-tau.vercel.app/",
    image: CareerForgeImage,
  },
  {
    title: "TaskPilot",
    description:
      "Task management app focused on clean UI and efficient date-based task organization. Implemented secure authentication with JWT and bcrypt, including email-based password reset workflows for enhanced security.Built an interactive drag-and-drop system using @dnd-kit to support dynamic task reordering with seamless backend synchronization.Designed advanced task management features such as priority-based filtering, due date categorization (overdue, today, upcoming), and real-time search.",
    tech: [
      "React",
      "Node.js",
      "Tailwind",
      "Typescript",
      "Framer Motion",
      "Dnd Kit",
      "Reduxjs/toolkit",
    ],
    link: "https://task-manager-frontend-hgfv.vercel.app/",
    image: TaskPilotImage,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden group"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">{p.title}</h3>

              <p className="mt-3 text-textSub">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                className="inline-block mt-4 text-primary font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
