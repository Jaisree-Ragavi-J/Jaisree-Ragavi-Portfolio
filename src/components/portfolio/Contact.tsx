import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Code, ExternalLink, Linkedin, Twitter, Youtube } from "lucide-react";
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
    value: "+91 9360972714",
    href: "tel:+919360972714",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/jaisree-ragavi-j",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@jsrv_j_official",
    href: "https://twitter.com/jsrv_j_official",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "Subscribe",
    href: "https://www.youtube.com/@jaisreeragavij3151",
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
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                  {item.href.startsWith("http") && (
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 pt-8 border-t border-border text-center"
            >
              <p className="text-muted-foreground mb-6">
                Open to internship opportunities and collaborations
              </p>
              <Button
                size="lg"
                className="neon-glow"
                asChild
              >
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
