import { useState } from "react";
import { clubInfo } from "../data";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const baseUrl = import.meta.env.BASE_URL;

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "gallery", label: "Gallery" },
    { id: "culture", label: "Culture" },
    { id: "word", label: "Word of the Week" },
    { id: "join", label: "Join Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 navbar">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={`${baseUrl}assets/logo-circle.png`}
            alt="logo"
            className="h-10 w-10"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <span className="font-heading text-xl font-bold text-brand-maroon">
            {clubInfo.name}
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-body font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-brand-maroon transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col space-y-3 p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block hover:text-brand-maroon transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
