import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { projects } from "./projects/projects";

const Grid = () => {
  return (
    <div id="work" className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl text-white text-center mb-20">
        My Projects
      </h2>
      <BentoGrid>
        {projects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={project.header}
            className={project.className}
            link={project.link}
            demoVideo={project.demoVideo}
            images={project.images}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Grid;
