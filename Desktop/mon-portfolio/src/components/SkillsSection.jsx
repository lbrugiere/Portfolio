import React from "react";
import { motion } from "framer-motion";
import SkillsCarousel from "./SkillsCarousel";
import skills from "../utils/skills";


export default function SkillsSection() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
      id="skills"
      className="bg-dark-secondary py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-warm-accent font-serif mb-14 text-left">
          Compétences
        </h2>
        <SkillsCarousel skills={skills} />
        </div>
    </motion.section>
  );
}