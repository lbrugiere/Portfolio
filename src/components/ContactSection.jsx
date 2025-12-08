import React from "react";
import { motion } from "framer-motion";
import GlowButton from "./GlowButton";

export default function ContactSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      id="contact"
      className="bg-dark-secondary py-12 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-warm-accent font-serif mb-14 text-left">
          Contact
        </h2>

        <p className="text-lg text-light-accent md:text-xl max-w-xl">
          Envie d’échanger ou de suivre mon parcours ?<br/>Retrouvez-moi sur LinkedIn :
        </p>

        <div className="mt-8">
          <GlowButton
            text="Mon profil LinkedIn"
            href="https://www.linkedin.com/in/TON-LIEN"
            target="_blank"
          />
        </div>
      </div>
    </motion.section>
  );
}
