import { Metadata } from "next";
import { getProject } from "@/lib/contentful";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject(params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found - Fiston Turner",
    };
  }

  return {
    title: `${project.fields.title} - Fiston Turner`,
    description: project.fields.description || "View this project in my portfolio.",
  };
}

export default async function Project({ params }: Props) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  const tags = project.fields.tags?.split(",").map((tag) => tag.trim()) || [];

  return (
    <div className="min-h-screen flex flex-col bg-[#111010] text-white">
      <main className="flex-grow">
        <MaxWidthWrapper className="py-12 sm:py-20">
          <div className="mb-16 sm:mb-20">
            <Link
              href="/projects"
              className="group inline-flex items-center text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
            >
              <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to projects
            </Link>
            
            <article>
              <header className="mb-8 sm:mb-12">
                <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                  {project.fields.title}
                </h1>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg text-neutral-400 max-w-2xl">
                    {project.fields.description}
                  </p>
                  {project.fields.link && (
                    <a
                      href={project.fields.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-white rounded-md hover:bg-neutral-100 transition-colors"
                    >
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}
                </div>
              </header>

              {project.fields.image && (
                <div className="relative aspect-[16/9] mb-12 overflow-hidden rounded-lg">
                  <Image
                    src={`https:${project.fields.image.fields.file.url}`}
                    alt={project.fields.image.fields.title || project.fields.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="space-y-8">
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs text-neutral-400 border border-neutral-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {project.fields.content && (
                  <div 
                    className="prose prose-invert prose-neutral max-w-none space-y-6 text-neutral-300"
                    dangerouslySetInnerHTML={{
                      __html: project.fields.content,
                    }}
                  />
                )}
              </div>
            </article>
          </div>
        </MaxWidthWrapper>
      </main>
    </div>
  );
}
