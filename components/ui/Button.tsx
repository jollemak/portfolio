"use client";
import React from "react";

export const Button = () => {
  const scrollToProjects = () => {
    const workSection = document.getElementById("projects");
    workSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToProjects}
      className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase bg-transparent hover:bg-orange-500 hover:text-white dark:text-neutral-200 transition duration-200"
    >
      Check out my projects
    </button>
  );
};
