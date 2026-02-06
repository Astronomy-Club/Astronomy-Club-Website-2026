import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>
          A glimpse into the technical, observational, and outreach initiatives
          undertaken by the Astronomy Club.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
