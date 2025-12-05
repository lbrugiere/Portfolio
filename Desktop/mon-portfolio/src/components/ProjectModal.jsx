import React from 'react';
import { FaTimes } from 'react-icons/fa';
import GlowButton from './GlowButton';

export default function ProjectModal({ project, onClose }) {
return ( 
<div
className="fixed inset-0 bg-dark-primary/80 flex items-center justify-center z-50 p-6 overflow-auto"
onClick={onClose}>
  <div
  className="bg-dark-secondary rounded-xl max-w-5xl w-full relative p-6 shadow-lg"
  onClick={e => e.stopPropagation()}>
    <button
    className="absolute top-4 right-4 text-light-accent hover:text-warm-accent transition-colors"
    onClick={onClose}> 
    <FaTimes size={24} /> 
    </button>

    <h2 className="text-3xl font-serif text-light-accent text-center mb-2">{project.title}</h2>
    <p className="font-serif text-gray-300 italic text-center mb-3">{project.description}</p>

    {project.image && (
      <img
        src={project.image}
        alt={project.title}
        className="w-80 h-auto max-h-64 object-cover mb-6 mx-auto"/>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-15 px-8 text-gray-300 text-sm">
      <div className="space-y-3">
        {project.realisation && (
          <>
            <h3 className="font-semibold  text-xl sm:text-[1.35rem] text-light-accent text-center mb-2">Réalisation complète</h3>
            <ul className=" list-inside space-y-1">
              {project.realisation.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="space-y-3">
        {project.info && (
          <>
            <h3 className="font-semibold  text-xl sm:text-[1.35rem] text-light-accent text-center mb-2">Infos projet</h3>
            <p>{project.info}</p>
          </>
        )}
      </div>
    </div>
    {project.link && 
      <div className="mt-8 flex justify-center">
        <GlowButton text="Voir le projet" href={project.link} target="_blank" />
      </div>
    }
  </div>
</div>
);
}


