import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex items-center">
      <ul className="hidden md:flex space-x-6 font-sans">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-warm-accent transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button 
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {open && (
          <ul className="absolute top-full right-0  bg-dark-secondary w-48 py-4 px-6 flex flex-col space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-warm-accent transition-colors block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
