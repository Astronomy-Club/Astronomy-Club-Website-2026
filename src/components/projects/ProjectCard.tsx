import { motion } from "framer-motion";
import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card"   // ← THIS IS CRITICAL
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Learn more →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
