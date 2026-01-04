"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { techStack } from "../../data/techStack";

const Icons = () => {

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="mt-8">
        <motion.h3
          className="text-2xl font-light text-white mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills & Tools
        </motion.h3>
        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 group"
              variants={item}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-lg p-3 transition-all duration-300">
                <div className="relative w-10 h-10">
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-xs text-neutral-400 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Icons;
