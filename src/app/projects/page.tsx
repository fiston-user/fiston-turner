import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { getProjects } from "@/lib/contentful";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of software development projects and applications",
  openGraph: {
    title: "Projects | Fiston - Portfolio",
    description:
      "Explore my portfolio of software development projects and applications",
  },
};

export default async function Projects() {
  const projects = await getProjects();

  const breadcrumbItems = [{ label: "Projects", href: "/projects" }];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <section className="space-y-8">
          {projects.length > 0 ? (
            projects.map((project: any) => (
              <article key={project.sys.id}>
                <time className="text-gray-500 dark:text-gray-400">
                  {new Date(project.sys.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </time>
                <h2 className="text-xl font-semibold">
                  <Link
                    href={`/projects/${project.fields.slug}`}
                    className="hover:underline"
                  >
                    {project.fields.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.fields.description}
                </p>
              </article>
            ))
          ) : (
            <p>
              No projects found. Check Contentful for the 'project' content
              type.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
