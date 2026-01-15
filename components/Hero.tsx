import { Highlight } from "./ui/hero-highlight";
import { BackgroundLines } from "./ui/background-lines";
import { Button } from '@/components/ui/Button';
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
      <BackgroundLines className="flex items-center justify-center w-full bg-gray-900">
        <div className="flex flex-col items-center justify-center gap-8 max-w-5xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-light text-white">
            Hello, I'm{" "}
            <span className="inline-block">
              <Highlight className="text-white font-light whitespace-nowrap">
                Joel Mäkelä
              </Highlight>
            </span>
          </h1>
          <p className="text-3xl md:text-5xl font-light text-white">
            Full Stack Developer.
          </p>
          <div className="mt-4">
            <Button />
          </div>
          <div className="flex flex-row gap-10 mt-4">
            <a
              href="https://github.com/jollemak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/github-mark-white.png"
                alt="GitHub Icon"
                height={40}
                width={40}
                style={{ width: "auto", height: "40px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/joel-m%C3%A4kel%C3%A4-0301491b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.webp"
                alt="LinkedIn Icon"
                width={40}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </a>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Hero;
