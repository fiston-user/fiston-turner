import Link from "next/link";
import { Project } from "@/lib/contentful";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const tags = project.fields.tags?.split(",").map((tag) => tag.trim()) || [];

  return (
    <Link
      href={project.fields.link || `/projects/${project.fields.slug}`}
      target={project.fields.link ? "_blank" : undefined}
      rel={project.fields.link ? "noopener noreferrer" : undefined}
      className="group block p-4 sm:p-6 -m-4 sm:-m-6 transition-colors hover:bg-neutral-900/50 rounded-lg"
    >
      <article className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-base sm:text-lg font-medium text-neutral-200 line-clamp-2">
            {project.fields.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2">
          {project.fields.description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-neutral-500 hidden sm:inline-block first:inline-block"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
};

export default ProjectCard;
