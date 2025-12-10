import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects.json';
import { techIcons, techColors } from '../utils/techIcons';

export default function ProjectsSection({ onProjectClick }) {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }} 
    id="projects" 
    className="bg-dark-secondary py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-warm-accent font-serif mb-12 text-left">Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-dark-secondary rounded-lg relative cursor-pointer overflow-hidden
              before:absolute before:inset-0 before:bg-warm-accent/20 before:blur-2xl before:opacity-50
              hover:scale-105 hover:shadow-[0_0_35px_rgba(216,195,171,0.35)]
              transition-all"
              onClick={() => onProjectClick(project)}>
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                className="rounded-t-lg mb-4 object-top object-cover w-full h-60" />

                <div className="flex justify-center gap-3 pb-2">
                  {project.technologies?.map((tech, index) => {
                    const Icon = techIcons[tech];
                    const color = techColors[tech];
                    return Icon ? 
                      <Icon key={index} className="w-6 h-6" title={tech} color={color} /> : null;
                  })}
                </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
