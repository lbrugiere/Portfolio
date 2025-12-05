import React from "react";
import SkillsCarousel from "./SkillsCarousel";
import skills from "../utils/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-dark-secondary py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-warm-accent font-serif mb-14 text-left">
          Compétences
        </h2>
        <SkillsCarousel skills={skills} />
        </div>
    </section>
  );
}