import React from 'react';
import GlowButton from './GlowButton';

export default function HeroSection() {
return ( 
<section id="hero" className="bg-dark-secondary min-h-[70vh] flex items-center py-12"> 
  <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
    <div className="md:w-1/2 space-y-6 animate-fadeInLeft"> 
      <h1 className="text-4xl  text-warm-accent md:text-6xl font-serif">
      Développeuse <br/>Front-End </h1> 
      <p className="text-lg text-light-accent md:text-xl max-w-md">
      Je crée des interfaces modernes et fonctionnelles.
      Découvrez mes projets et compétences ci-dessous. </p> 
      <GlowButton text="Découvrir mes travaux" href="#projects" />
    </div>
  </div>
</section>
);
}
