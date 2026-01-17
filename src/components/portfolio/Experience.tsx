import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react";

const experiences = [
  {
    type: "experience",
    title: "Winter Intern",
    organization: "IIT Ropar",
    period: "Dec 2025 – Jan 2026",
    highlights: [
      "MERN stack learning via Vibe platform",
      "Real-world case studies and practical implementation",
      "Cleared viva with Silver Ticket recognition",
      "Received peer endorsements for collaborative work",
      "Contributed to Spandan project features",
    ],
  },
];

const education = [
  {
    type: "education",
    title: "B.Tech Information Technology (Hons. in Cloud Computing)",
    organization: "Sona College of Technology, Salem",
    period: "2022 – 2026",
    grade: "CGPA: 8.88",
  },
  {
    type: "education",
    title: "Higher Secondary (HSC)",
    organization: "Barathi Vidya Bhavan Matriculation Higher Secondary School, Erode ",
    period: "2022",
    grade: "93.8%",
  },
  {
    type: "education",
    title: "Secondary School (SSLC)",
    organization: "Kalaimagal Kalvi Nilayam Girls’ Matriculation School, Erode",
    period: "2020",
    grade: "87.6%",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="gradient-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey and academic background</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-12 pb-8"
                >
                  <div className="absolute left-2 w-5 h-5 rounded-full bg-primary neon-glow" />
                  <div className="glass-card rounded-xl p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        Silver Ticket
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-1">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-12 pb-6"
                >
                  <div className="absolute left-2 w-5 h-5 rounded-full bg-accent" />
                  <div className="glass-card rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{edu.title}</h4>
                    <p className="text-primary font-medium mb-1">{edu.organization}</p>
                    <p className="text-muted-foreground text-sm mb-2">{edu.period}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">
                        {edu.grade}
                      </span>
                      {edu.specialization && (
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                          {edu.specialization}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
