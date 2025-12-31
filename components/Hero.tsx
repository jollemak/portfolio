import { Highlight } from "./ui/hero-highlight";
import { BackgroundLines } from "./ui/background-lines";
import {Button} from '@/components/ui/Button';

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
            .
          </h1>
          <p className="text-3xl md:text-5xl font-light text-white">
            I'm a full stack web developer.
          </p>
          <div className="mt-8">
            <Button />
          </div>
        </div>
    </BackgroundLines>
      </div>
  );
};

export default Hero;
