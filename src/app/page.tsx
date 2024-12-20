/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { BlogPost, getBlogPosts, getProjects, Project } from "@/lib/contentful";
import { Metadata } from "next";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HireMe from "@/components/HireMe";
import TechStack from "@/components/TechStack";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fiston Turner - Design Engineer",
  description: "Design Engineer & Product Designer focused on building accessible, user-centric digital experiences.",
};

export default async function Home() {
  const blogPosts = await getBlogPosts();
  const projects = await getProjects();

  return (
    <div className="min-h-screen flex flex-col bg-[#111010] text-white">
      <main className="flex-grow">
        <MaxWidthWrapper className="py-12 sm:py-20">
          {/* Hero Section */}
          <div className="mb-16 sm:mb-24">
            <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-6 tracking-tight">
              Fiston Turner
            </h1>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
              Software developer with a knack for solving problems. I write clean code and bad jokes. Always learning, rarely napping. Let's build something cool together.
              </p>
              <TechStack />
              {/* <HireMe /> */}
            </div>
          </div>

          {/* Featured Work Section */}
          <section className="mb-16 sm:mb-24">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="font-display text-xl sm:text-2xl font-medium text-neutral-200">Featured Work</h2>
              <Link 
                href="/projects" 
                className="group flex items-center text-xs sm:text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                View all projects
                <ArrowUpRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
            <div className="grid gap-4 sm:gap-8 sm:grid-cols-2">
              {projects.length > 0 ? (
                projects
                  .slice(0, 4)
                  .map((project: Project) => (
                    <ProjectCard key={project.sys.id} project={project} />
                  ))
              ) : (
                <p className="text-neutral-400">No projects found.</p>
              )}
            </div>
          </section>

          {/* Writing Section */}
          <section className="mb-16 sm:mb-24">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="font-display text-xl sm:text-2xl font-medium text-neutral-200">Writing</h2>
              <Link 
                href="/blog" 
                className="group flex items-center text-xs sm:text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                View all posts
                <ArrowUpRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {blogPosts.length > 0 ? (
                blogPosts.slice(0, 4).map((post: BlogPost) => (
                  <article key={post.sys.id} className="group">
                    <Link href={`/blog/${post.fields.slug}`} className="block group-hover:opacity-70 transition-opacity">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0">
                        <h3 className="text-base sm:text-lg text-neutral-200">{post.fields.title}</h3>
                        <time className="text-xs sm:text-sm text-neutral-500">
                          {new Date(post.sys.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}
                        </time>
                      </div>
                    </Link>
                  </article>
                ))
              ) : (
                <p className="text-neutral-400">No blog posts found.</p>
              )}
            </div>
          </section>
        </MaxWidthWrapper>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
