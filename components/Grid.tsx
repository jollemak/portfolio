import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payment processing, and responsive design.",
    header: <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-red-500"></div>,
    className: "md:col-span-1",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop functionality, real-time updates using WebSockets, and team collaboration features.",
    header: <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500"></div>,
    className: "md:col-span-1",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application integrating multiple APIs, displaying forecasts with interactive maps and location-based alerts.",
    header: <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500"></div>,
    className: "md:col-span-1",
  },
  {
    title: "Social Media Analytics",
    description:
      "Data visualization dashboard for social media metrics, built with React and D3.js, featuring custom charts and exportable reports.",
    header: <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-500 to-emerald-500"></div>,
    className: "md:col-span-1",
  },
  {
    title: "Blog CMS",
    description:
      "Content management system with markdown support, SEO optimization, and role-based access control for multi-author publishing.",
    header: <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500"></div>,
    className: "md:col-span-1",
  },
  {
    title: "Fitness Tracker",
    description:
      "Mobile-first fitness application tracking workouts, nutrition, and progress with personalized goal setting and achievement system.",
    header: <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500"></div>,
    className: "md:col-span-1",
  },
];

const Grid = () => {
  return (
    <div id="work" className="w-full max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4">
        My Work
      </h2>
      <p className="text-neutral-400 text-center mb-12 text-lg">
        Check out some of my recent projects
      </p>
      <BentoGrid>
        {projects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={project.header}
            className={project.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Grid;
