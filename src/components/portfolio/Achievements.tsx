import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Medal, Star, Trophy, Mic, FileText } from "lucide-react";

const certifications = [
  {
    title: "NPTEL Java Programming",
    badge: "Elite Gold",
    score: "91%",
    icon: Award,
    color: "text-yellow-500",
  },
  {
    title: "NPTEL Cloud Computing",
    badge: "Elite Silver",
    score: "Top 5%",
    icon: Medal,
    color: "text-gray-400",
  },
  {
    title: "NPTEL Design Thinking",
    badge: "Elite Silver",
    score: "",
    icon: Medal,
    color: "text-gray-400",
  },
];

const achievements = [
  {
    title: "Academic Excellence Award",
    description: "3 consecutive years of outstanding academic performance",
    icon: Star,
  },
  {
    title: "Dr. APJ Abdul Kalam Award",
    description: "Best Engineering Student recognition",
    icon: Trophy,
  },
  {
    title: "Speaker's Forum",
    description: "3rd Place (Achieved Twice)",
    icon: Mic,
  },
  {
    title: "Paper Presentation",
    description: "Blockchain in Energy - 2nd Place",
    icon: FileText,
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="gradient-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">Recognition for excellence and continuous learning</p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-semibold text-foreground mb-8"
          >
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className={`h-8 w-8 ${cert.color}`} />
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                  cert.badge === "Elite Gold" 
                    ? "bg-yellow-500/20 text-yellow-500" 
                    : "bg-gray-400/20 text-gray-400"
                }`}>
                  {cert.badge}
                </span>
                <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                {cert.score && (
                  <p className="text-primary font-bold text-lg">{cert.score}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-semibold text-foreground mb-8"
          >
            Awards & Recognition
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card-hover rounded-xl p-5 text-center group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <achievement.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{achievement.title}</h4>
                <p className="text-muted-foreground text-xs">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
