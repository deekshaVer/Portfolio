"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-primary">Deeksha Verma</h1>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="hidden md:flex gap-4">
          <a href="https://github.com/deekshaVer" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/deeksha-verma-835209150"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
