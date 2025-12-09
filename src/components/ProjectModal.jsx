import React from 'react';
import { X, Check } from "lucide-react";
import GlowButton from './GlowButton';

export default function ProjectModal({ project, onClose }) {
return ( 
<div
className="fixed inset-0 bg-dark-primary/80 z-50 overflow-auto min-h-screen flex justify-center items-start md:items-center"
onClick={onClose}>
  <div
  className="bg-dark-secondary rounded-xl w-full max-w-5xl relative p-6 shadow-lg my-12 lg:my-0 mx-4"
  onClick={e => e.stopPropagation()}>
    <button
    className="absolute top-2 right-3 text-light-accent hover:text-warm-accent transition-colors text-base sm:text-2xl"
    onClick={onClose}> 
    <X size={24} /> 
    </button>

    <h2 className="text-2xl sm:text-3xl font-serif text-light-accent text-center mt-4  mb-2">{project.title}</h2>
    <p className="font-serif text-gray-300 italic text-center mb-3">{project.description}</p>

    {project.image && (
      <div className="relative mx-auto mb-6 transition-all duration-500 ease-out 
      w-full max-w-md h-[38vh] hover:max-w-xl hover:h-[55vh] overflow-hidden rounded-lg">
<img
src={project.image}
alt={project.title}
className="w-full h-full object-cover object-top"
/>
</div>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-15 px-8 text-gray-300 text-sm">
      <div className="space-y-3">
        {project.realisation && (
          <>
            <h3 className="font-semibold  text-xl sm:text-[1.35rem] text-light-accent text-center mb-2">Réalisation complète</h3>
            <ul className=" list-inside space-y-1">
              {project.realisation.map((item, idx) => (
                <li key={idx} className="flex pb-2 items-center">
                  <Check className="text-warm-accent mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="space-y-3 max-w-md mx-auto">
  {project.info && (
    <>
      <h3 className="font-semibold text-xl sm:text-[1.35rem] text-light-accent text-center mb-2">
        Infos projet
      </h3>
      {project.info.split("\n").map((line, idx) => (
        <p key={idx} className="text-gray-300 text-sm">
          {line}
        </p>
      ))}
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


