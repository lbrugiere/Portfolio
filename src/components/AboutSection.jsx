import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      id="about"
      className="bg-dark-secondary py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-warm-accent font-serif mb-14 text-left">
          À propos de moi
        </h2>

        <div className="flex flex-col gap-2 md:gap-4 max-w-4xl">
          <p className="max-w-xl text-lg md:text-xl leading-relaxed text-light-accent">
            Je suis développeuse en début de parcours, passionnée par la création
            d’interfaces web modernes et le fonctionnement des applications. J’apprends
            chaque jour à renforcer mes compétences en front-end et à évoluer
            progressivement vers le full-stack, un domaine dans lequel je souhaite me
            spécialiser.
          </p>

          <p className="max-w-xl ml-auto mt-2 md:mt-3 text-left text-lg md:text-xl leading-relaxed text-light-accent">
            Curieuse et motivée, j’aime comprendre comment les technologies s’articulent
            pour donner vie à des projets concrets. Je poursuis mes études afin de
            développer une expertise solide et devenir une développeuse polyvalente
            capable de concevoir autant l’expérience utilisateur que la logique serveur.
          </p>
        </div>
      </div>
    </motion.section>
  );
}