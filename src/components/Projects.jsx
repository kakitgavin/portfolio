import ProjectCards from "./ProjectCards";
import { projects } from "../constants";

function Projects() {
  return (
    <section id="projectSection" className="w-full mt-20">
      <h1 className="text-3xl md:text-5xl font-bold mt-10 text-center text-yellow-300">
        Projects
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {projects.map((element) => (
          <ProjectCards
            key={element.id}
            name={element.name}
            imgPath={element.imgPath}
            description={element.description}
          />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
