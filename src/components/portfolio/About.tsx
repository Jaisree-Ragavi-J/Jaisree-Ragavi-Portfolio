import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Zap, Heart, BookOpen, Users } from "lucide-react";

const traits = [
  { name: "Excellent Communicator", icon: MessageCircle },
  { name: "Proactive", icon: Zap },
  { name: "Empathetic", icon: Heart },
  { name: "Quick Learner", icon: BookOpen },
  { name: "Team Player", icon: Users },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="gradient-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Getting to know who I am</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Eager and dedicated IT undergraduate with a passion for technology and a strong 
              foundation in cloud computing and full-stack development. Recognized for academic 
              excellence and proactive involvement in technical and leadership activities. Seeking 
              an internship or entry-level opportunity to apply my skills, learn from industry 
              professionals, and contribute to innovative projects while growing in a dynamic 
              tech environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Key Traits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card-hover rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <trait.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{trait.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
