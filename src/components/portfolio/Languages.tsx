import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";

const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "BA Level" },
  { name: "Sanskrit", level: "Basic Reading/Writing" },
];

export const Languages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Languages</h2>
          <p className="section-subtitle">Communication across cultures</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{lang.name}</h4>
                    </div>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {lang.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
