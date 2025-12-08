import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-dark-secondary text-light-accent fixed w-full z-50 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-serif">Léa Brugière</div>
        <NavBar />
      </nav>
    </header>
  );
}
