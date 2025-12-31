import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full max-w-5xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-8">
        About Me
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <Image
            src="/profile-pic.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full border-4 border-orange-500 shadow-2xl"
            style={{ width: "300px", height: "400px" }}
          />
        </div>
        
        <div className="flex-1 max-w-2xl">
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
            Career changer from healthcare to tech. I've traded
            the operating room for the keyboard! Currently
            studying software development at <span className="text-orange-500 font-semibold">kood/Sisu</span>, a
            hands-on coding school in Finland. Passionate about
            problem-solving, clean code, and continuous learning.
          </p>
          
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
            Outside of coding, I play guitar and sing in a cover band.
            I've also played football my whole life —
            teamwork and rhythm guide everything I do!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
