import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vijaisreeragavi@gmail.com",
    href: "mailto:vijaisreeragavi@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93609 72714",
    href: "tel:+919360972714",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Erode, Tamil Nadu",
  },
  {
    icon: Code,
    label: "LeetCode",
    value: "View Profile",
    href: "https://leetcode.com/u/Do9oYRze4a/",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="gradient-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and create something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="rounded-xl bg-secondary/50 transition-colors group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 rounded-xl p-4 hover:bg-primary/10 focus-visible:outline-none"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 transition-transform group-hover:scale-110">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                      {item.href.startsWith("http") && (
                        <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                      )}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-border text-center"
            >
              <p className="text-muted-foreground mb-6">Feel free to reach out about my work or for technical collaboration.</p>
              <Button size="lg" className="neon-glow" asChild>
                <a href="mailto:vijaisreeragavi@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send an Email
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
