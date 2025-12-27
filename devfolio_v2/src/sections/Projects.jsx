import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Aeroduel",
    description:
      "As the lead mobile developer and designer for my Atlas School capstone, my team and I architected a real-time aerial combat simulator. I designed the end-to-end user experience and developed the mobile interface that communicates via WebSockets with 3D-printed RC planes. By integrating computer vision data from H7 Cam Plus sensors into a responsive app, I successfully bridged complex hardware signals with an intuitive, high-performance digital dashboard.",
    image: "/aeroduel.jpeg",
    tags: [
      "React",
      "Typescript",
      "React Native",
      "Google Firebase",
      "Expo",
      "Vercel",
      "C++",
    ],
    link: "https://www.aeroduel.com",
    github: "https://www.github.com/Aeroduel",
  },
  {
    title: "Melodiic",
    description:
      "Developed a visually refined, accessible music player UI that prioritizes seamless navigation across playlists and account features. By leveraging modern layout patterns and Bootstrap, I ensured full mobile-to-desktop responsiveness, while implementing cookie-based persistence for a consistent user experience. This project highlights my ability to build functional, high-performance interfaces.",
    image: "/melodiic.png",
    tags: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
    link: "https://www.youtube.com/watch?v=nhwOezHkQ4c",
    github: "https://github.com/BoostedT/Melodiic?tab=readme-ov-file",
  },
  {
    title: "Diinker (In Progress)",
    description:
      "I am currently developing an end-to-end IoT solution for pickleball players, synchronizing hardware components with a robust software suite. This project serves as a deep dive into the full development lifecycle, requiring a sophisticated blend of data processing, responsive UI design, and hardware-software synergy. It’s a showcase of my ability to translate complex physical movements into actionable digital insights.",
    image: "/diinker.png",
    tags: ["React", "TypeScript", "React Native", "Google Firebase", "Vercel", "Expo"],
    link: "https://diinker-web.vercel.app",
    github: "https://www.github.com/Diinker",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
