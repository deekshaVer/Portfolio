import Image from "next/image";

import ReactIcon from "../../public/react-icon.png";
import JavascriptIcon from "../../public/javascript-icon.png";
import HTMLIcon from "../../public/html-icon.webp";
import TypescriptIcon from "../../public/typescript.png";
import ReduxIcon from "../../public/redux.png";
import MongoDbIcon from "../../public/mongoDb.png";
import NodeIcon from "../../public/nodejs-icon.svg";
import vscodeIcon from "../../public/vscode-icon.png";
import GitIcon from "../../public/git-icon.png";
import NextjsIcon from "../../public/nextjs-icon.svg";
import TailwindIcon from "../../public/tailwind.png";
import VueIcon from "../../public/vue.png";

export default function Skills() {
  const skills = [
    { name: "React JS", icon: ReactIcon },
    { name: "Vue", icon: VueIcon },
    { name: "HTML", icon: HTMLIcon },
    { name: "Redux", icon: ReduxIcon },
    { name: "Javascript", icon: JavascriptIcon },
    { name: "Typescript", icon: TypescriptIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "MongoDB", icon: MongoDbIcon },
    { name: "NextJs", icon: NextjsIcon },
    { name: "Tailwind", icon: TailwindIcon },
    { name: "Git", icon: GitIcon },
    { name: "VSCode", icon: vscodeIcon },
  ];
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold text-center">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mt-16 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div
              className="
              w-24 h-24 
              flex items-center justify-center 
              rounded-full 
              bg-gray-100 
              shadow-sm
              transition-all duration-300
              group-hover:shadow-md 
              group-hover:-translate-y-1
            "
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <p className="mt-4 text-sm text-textSub">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
