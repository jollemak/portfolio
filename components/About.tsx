"use client";

import Image from "next/image";
import Icons from "./ui/icons";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full max-w-5xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-10">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/profile-pic.png"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full border-4 border-orange-500 shadow-2xl"
            style={{ width: "300px", height: "400px" }}
          />
        </motion.div>

        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
            Career changer from healthcare to tech. I've traded the operating
            room for the keyboard! Currently studying software development at{" "}
            <span className="text-orange-500 font-semibold">
              <a
                href="https://koodsisu.fi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                kood/Sisu
              </a>
            </span>
            , a hands-on coding school in Finland. Passionate about
            problem-solving, clean code, and continuous learning.
          </p>

          <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
            Outside of coding, I play guitar and sing in a cover band. I've also
            played football my whole life so teamwork and rhythm guide
            everything I do!
          </p>
        </motion.div>
      </div>
      <Icons />
    </div>
  );
};

export default About;
