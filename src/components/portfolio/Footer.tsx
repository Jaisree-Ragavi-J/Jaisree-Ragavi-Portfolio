import { motion } from "framer-motion";
import { Heart, Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://www.linkedin.com/in/jaisree-ragavi-j"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group"
          >
            <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://twitter.com/jsrv_j_official"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group"
          >
            <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/@jaisreeragavij3151"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group"
          >
            <Youtube className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground flex items-center justify-center gap-2"
        >
          Made with <Heart className="h-4 w-4 text-accent fill-accent" /> by Jaisree Ragavi J
        </motion.p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
