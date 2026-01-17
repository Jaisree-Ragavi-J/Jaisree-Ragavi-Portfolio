import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Users, Lightbulb } from "lucide-react";

const roles = [
  {
    title: "President",
    organization: "IEI IT Students Chapter",
    description: "Leading the Institute of Engineers India IT chapter, organizing technical events, workshops, and fostering a community of aspiring engineers.",
    icon: Crown,
  },
  {
    title: "Joint Secretary",
    organization: "English Club",
    description: "Coordinating club activities, organizing literary events, debates, and enhancing communication skills among members.",
    icon: Users,
  },
  {
    title: "Organizer",
    organization: "ED Cell (Entrepreneurship Development)",
    description: "Planning and executing entrepreneurship events, connecting students with industry mentors, and promoting startup culture.",
    icon: Lightbulb,
  },
];

export const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Leadership & Activities</h2>
          <p className="section-subtitle">Roles where I've made an impact</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card-hover rounded-2xl p-8 text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <role.icon className="h-10 w-10 text-primary" />
              </div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                {role.title}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-2 mb-4">
                {role.organization}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
