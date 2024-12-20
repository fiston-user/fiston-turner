/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import { getProjects, Project } from "@/lib/contentful";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects - Fiston Turner",
  description: "A collection of my work in design systems, web applications, and digital experiences.",
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen flex flex-col bg-[#111010] text-white">
      <main className="flex-grow">
        <MaxWidthWrapper className="py-12 sm:py-20">
          <div className="mb-12 sm:mb-16">
            <Link
              href="/"
              className="group inline-flex items-center text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
            >
              <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back
            </Link>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Projects</h1>
          </div>

          <div className="grid gap-4 sm:gap-8 sm:grid-cols-2">
            {projects.length > 0 ? (
              projects.map((project: Project) => (
                <ProjectCard key={project.sys.id} project={project} />
              ))
            ) : (
              <p className="text-neutral-400">No projects found.</p>
            )}
          </div>
        </MaxWidthWrapper>
      </main>
    </div>
  );
}
