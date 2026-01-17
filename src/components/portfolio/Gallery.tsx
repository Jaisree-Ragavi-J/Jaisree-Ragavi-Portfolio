import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import blockchainImage from "@/assets/blockchain-presentation.jpg";
import vervathonImage from "@/assets/vervathon.jpg";
import speakerImage from "@/assets/speaker-forum.jpeg";
import bestEngineerImage from "@/assets/best-engineer.jpeg";
import iitRoparImage from "@/assets/iit-ropar-interaction.png";
import silverTicketImage from "@/assets/silver-ticket.png";
import mocEnglishImage from "@/assets/moc-english-club.png";
import ieiQuantumImage from "@/assets/iei-quantum-conference.png";

const galleryImages = [
  // Existing photos first
  {
    src: blockchainImage,
    title: "Blockchain Paper Presentation",
    category: "Awards",
  },
  {
    src: vervathonImage,
    title: "Vervathon 1st Place",
    category: "Hackathons",
  },
  {
    src: speakerImage,
    title: "Speaker's Forum",
    category: "Events",
  },
  {
    src: bestEngineerImage,
    title: "Best Engineering Student Award",
    category: "Awards",
  },
  // New photos
  {
    src: iitRoparImage,
    title: "Internship IIT Ropar - Prof Sudarshan Iyenger Sir Interaction",
    category: "Internship",
  },
  {
    src: silverTicketImage,
    title: "Silver Ticket Holder",
    category: "Awards",
  },
  {
    src: mocEnglishImage,
    title: "MoC - The English Club",
    category: "Leadership",
  },
  {
    src: ieiQuantumImage,
    title: "President IEI (SLC) - Quantum Computing Conference",
    category: "Leadership",
  },
];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="gradient-bg">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">Moments from my journey</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h4 className="text-foreground font-semibold mt-1">{image.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-2">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
