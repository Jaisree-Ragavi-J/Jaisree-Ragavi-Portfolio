import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cloud, Monitor, Workflow } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Fundamentals",
    icon: Code,
    skills: ["Java", "Python", "C", "Data Structures & Algorithms"],
  },
  {
    title: "CI/CD & Automation",
    icon: Workflow,
    skills: ["Git", "GitHub", "GitHub Enterprise", "GitHub Actions", "YAML", "PowerShell"],
  },
  {
    title: "Code Quality & Build",
    icon: Cloud,
    skills: ["Coverity", "SonarQube", ".NET SDK", "Node.js", "Electron"],
  },
  {
    title: "Cloud & Systems",
    icon: Monitor,
    skills: ["Cloud Computing", "Computer Networks", "Windows", "Linux CLI", "MERN Stack"],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-secondary/70 px-3 py-1.5 text-sm font-medium text-secondary-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
