"use client";
import ReactIcon from "../../public/react-icon.png";
import NextJSIcon from "../../public/nextjs-icon.svg";
import NodeJSIcon from "../../public/nodejs-icon.svg";
import JavascriptIcon from "../../public/javascript-icon.png";
import HTMLIcon from "../../public/html-icon.webp";
import VSCodeIcon from "../../public/vscode-icon.png";
import LinkedInIcon from "../../public/linkedIn-icon.png";
import GitHubIcon from "../../public/github-icon.svg";
import MailIcon from "../../public/email-icon.svg";
import ResumeIcon from "../../public/resume-icon.png";

import Image from "next/image";

export default function Hero() {
  const icons = [
    ReactIcon,
    NextJSIcon,
    NodeJSIcon,
    JavascriptIcon,
    HTMLIcon,
    VSCodeIcon,
  ];

  const socialIcons = [
    {
      icon: LinkedInIcon,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/deeksha-verma-835209150/",
    },
    { icon: GitHubIcon, name: "GitHub", link: "https://github.com/deekshaVer" },
    { icon: ResumeIcon, name: "Resume", link: "/Deeksha_Resume13_04_26.pdf" },
    {
      icon: MailIcon,
      name: "Email",
      link: "mailto:v_deeksha@yahoo.com",
    },
  ];
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-primary">Deeksha Verma</span>
          <span className="block text-lg md:text-xl font-normal mt-2 text-textSub">
            A fullstack developer who enjoys building fast, reliable web
            applications.
          </span>
        </h1>
        <p className="mt-6 text-lg text-textSub">
          5+ years of experience optimizing performance, designing scalable
          architectures, and integrating AI into real-world products. Strong
          focus on clean code, accessibility, and performance-driven
          development, with hands-on experience improving Lighthouse scores and
          reducing bundle sizes. Experienced in building end-to-end systems—from
          intuitive frontend interfaces to robust backend APIs—while
          collaborating closely with cross-functional teams. Passionate about
          leveraging modern technologies to solve real product problems and
          deliver meaningful user experiences.
        </p>
        <div className="flex items-center gap-5 mt-6">
          {socialIcons.map((item, index) => (
            <div key={index} className="relative group">
              <span
                className="
          absolute -top-10 left-1/2 -translate-x-1/2
          px-3 py-1 text-xs font-medium
          bg-black text-white rounded-md
          opacity-0 group-hover:opacity-100
          translate-y-2 group-hover:translate-y-0
          transition-all duration-200
          whitespace-nowrap
        "
              >
                {item.name}
              </span>
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
        w-14 h-14 
        flex items-center justify-center 
        rounded-2xl 
        bg-white 
        shadow-md 
        border border-gray-200
        transition-all duration-300
        hover:shadow-xl 
        hover:-translate-y-1
        hover:scale-105
      "
              >
                <Image
                  src={item.icon}
                  alt="social-icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[320px] h-[320px] flex items-center justify-center">
        <div className="absolute w-full h-full rotate-circle z-0">
          {icons.map((item, index) => {
            const angle = (index / icons.length) * 2 * Math.PI;
            const radius = 130;

            const x = Math.round(radius * Math.cos(angle));
            const y = Math.round(radius * Math.sin(angle));

            return (
              <div
                key={index}
                className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md border"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  left: "50%",
                  top: "50%",
                }}
              >
                <Image
                  src={item}
                  alt="tech"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary text-white font-semibold shadow-lg">
            Tech
          </div>
        </div>
      </div>
    </section>
  );
}
