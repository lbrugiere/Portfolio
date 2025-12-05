import React from 'react';

export default function Header() {
    return (
      <header className="bg-dark-secondary text-light-accent fixed w-full z-50 shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-serif">Léa Brugière</div>
          <ul className="flex space-x-6 font-sans">
            <li><a href="#hero" className="hover:text-warm-accent transition-colors">Accueil</a></li>
            <li><a href="#about" className="hover:text-warm-accent transition-colors">À propos</a></li>
            <li><a href="#skills" className="hover:text-warm-accent transition-colors">Compétences</a></li>
            <li><a href="#projects" className="hover:text-warm-accent transition-colors">Projets</a></li>
            <li><a href="#contact" className="hover:text-warm-accent transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }