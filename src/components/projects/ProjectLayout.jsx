import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
};

const NavLink = motion(Link);

const ProjectLayout = ({ id, name, description, date, technologies, category }) => {
  return (
    <NavLink 
      href={`/projects/${id}`}
      variants={item}
      className="text-sm md:text-base flex flex-col w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:shadow-glass-sm transition-all duration-300 group"
    >
      {/* Header with name and category */}
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-foreground font-medium group-hover:text-accent transition-colors">
            {name}
          </h2>
          <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            {category}
          </span>
        </div>
        <p className="text-muted text-sm">
          {new Date(date).toDateString()}
        </p>
      </div>

      {/* Description */}
      <p className="text-muted text-sm mb-3 line-clamp-2 group-hover:text-foreground transition-colors">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1 mb-2">
        {technologies.slice(0, 4).map((tech, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 rounded bg-background/50 text-foreground/80 border border-muted/20"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 4 && (
          <span className="text-xs px-2 py-1 text-muted">
            +{technologies.length - 4} more
          </span>
        )}
      </div>

      {/* View Details indicator */}
      <div className="flex items-center justify-end mt-2">
        <span className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          View Details →
        </span>
      </div>
    </NavLink>
  );
};

export default ProjectLayout;