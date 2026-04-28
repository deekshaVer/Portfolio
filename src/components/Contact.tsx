import LinkedInIcon from "../../public/linkedIn-icon.png";
import GitHubIcon from "../../public/github-icon.svg";
import MailIcon from "../../public/email-icon.svg";
import Image from "next/image";

const socialIcons = [
  {
    icon: LinkedInIcon,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deeksha-verma-835209150/",
  },
  { icon: GitHubIcon, name: "GitHub", link: "https://github.com/deekshaVer" },
  {
    icon: MailIcon,
    name: "Email",
    link: "mailto:v_deeksha@yahoo.com",
  },
];
export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold">Let’s Connect</h2>

      <div className="flex justify-center gap-5 mt-6">
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
    </section>
  );
}
