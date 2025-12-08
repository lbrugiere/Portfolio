import React from 'react';
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-secondary text-light-accent py-6 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tous droits réservés</p>
        <div className="flex space-x-4 mt-3">
          <a href="https://github.com/lbrugiere" aria-label="Voir mon profil GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-warm-accent transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}