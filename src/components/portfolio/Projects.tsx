import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Cpu, Network, Server, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Campus Interview Cracker",
    type: "Mini Project",
    description:
      "A comprehensive platform designed to help students prepare for campus placements with practice questions, mock interviews, and preparation resources.",
    tags: ["Full Stack", "Web Development", "Education"],
    icon: Cpu,
    highlight: null,
  },
  {
    title: "3D Model Generation from Text",
    type: "Hackathon Project",
    description:
      "AI-powered application that generates 3D models from text descriptions, showcasing the intersection of NLP and computer graphics.",
    tags: ["AI/ML", "3D Graphics", "Innovation"],
    icon: Trophy,
    highlight: "Verveathon 1st Place 🏆",
  },
  {
    title: "Graph Theory - Dynex Moonshots",
    type: "Capstone Project",
    description:
      "Advanced graph theory implementation exploring quantum-inspired algorithms and optimization problems using the Dynex platform.",
    tags: ["Graph Theory", "Quantum Computing", "Research"],
    icon: Network,
  },
  {
    title: "Virtualized Lab Environment",
    type: "Honors Capstone",
    description:
      "Cloud-based virtualized laboratory environment enabling remote access to computing resources for educational purposes.",
    tags: ["Cloud Computing", "Virtualization", "DevOps"],
    icon: Server,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Showcasing my technical work and achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card-hover rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-7 w-7 text-primary" />
                  </div>
                  {project.highlight && (
                    <span className="px-3 py-1.5 bg-accent/20 text-accent text-sm rounded-full font-semibold">
                      {project.highlight}
                    </span>
                  )}
                </div>

                <span className="text-sm text-muted-foreground font-medium">{project.type}</span>
                <h3 className="text-xl font-semibold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
