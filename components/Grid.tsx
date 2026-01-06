"use client";

import { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { projects } from "../data/projects";

const Grid = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  const hasMore = projects.length > 6;

  return (
    <div id="projects" className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl text-white text-center mb-20">
        My Projects
      </h2>
      <BentoGrid>
        {visibleProjects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={project.header}
            className={project.className}
            link={project.link}
            demoVideo={project.demoVideo}
            images={project.images}
            tags={project.tags}
          />
        ))}
      </BentoGrid>

      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Grid;
