/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Newsletter from "@/components/Newsletter";
import ProjectCard from "@/components/ProjectCard";
import { BlogPost, getBlogPosts, getProjects, Project } from "@/lib/contentful";
import { Metadata } from "next";
import Link from "next/link";
import VerificationBadge from "@/components/VerificationBadge";
import HireMe from "@/components/HireMe"; // Add this import
import GithubRepoCard from "@/components/GithubRepoCard";
import SocialMediaCard from "@/components/SocialMediaCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import YouTubeVideos from "@/components/YouTubeVideos";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Fiston's portfolio - Explore my projects and blog posts",
};

export default async function Home() {
  const blogPosts = await getBlogPosts();
  const projects = await getProjects();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-gray-900 dark:text-white">
      {/* <Header /> */}
      <main className="flex-grow">
        <MaxWidthWrapper className="py-8 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center">
            Fiston
            <span className="text-green-500 ml-2">☘️</span>
          </h1>
          <p className="mb-8 max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Software developer with a knack for solving problems. I write clean
            code and bad jokes. Always learning, rarely napping. Let&apos;s
            build something cool together.
          </p>
          <HireMe />
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            GitHub Repositories
          </h2>
          <section className="grid gap-6 mb-12 sm:grid-cols-2">
            <GithubRepoCard
              name="contract-analysis-yt"
              description="A tool to analyze contracts and extract information"
              url="https://github.com/fiston-user/contract-analysis-yt"
              stars={46}
              language="TypeScript"
            />
            <GithubRepoCard
              name="node-api-yt"
              description="Deploy a Node.js API with kubernetes and docker"
              url="https://github.com/fiston-user/node-api-yt"
              stars={2}
              language="TypeScript"
            />
          </section>
          <YouTubeVideos />
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Recent Projects
          </h2>
          <section className="grid gap-6 mb-12 sm:grid-cols-2">
            {projects.length > 0 ? (
              projects
                .slice(0, 4)
                .map((project: Project) => (
                  <ProjectCard key={project.sys.id} project={project} />
                ))
            ) : (
              <p>
                No projects found. Check Contentful for the &apos;project&apos;
                content type.
              </p>
            )}
          </section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Recent Blog Posts
          </h2>
          <section className="grid gap-6 mb-12 sm:grid-cols-2">
            {blogPosts.length > 0 ? (
              blogPosts.slice(0, 4).map((post: BlogPost) => (
                <article
                  key={post.sys.id}
                  className="border border-gray-200 dark:border-neutral-800 p-4 rounded-lg"
                >
                  <time className="text-gray-500 dark:text-gray-400">
                    {new Date(post.sys.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="text-xl font-semibold">
                    <Link
                      href={`/blog/${post.fields.slug}`}
                      className="hover:underline"
                    >
                      {post.fields.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    by {post.fields.author}
                    <VerificationBadge />
                  </p>
                </article>
              ))
            ) : (
              <p>
                No blog posts found. Check Contentful for the
                &apos;blogPost&apos; content type.
              </p>
            )}
          </section>

          <h2 className="text-xl sm:text-2xl font-bold mb-4">Social Media</h2>
          <section className="grid gap-6 mb-12 sm:grid-cols-2 md:grid-cols-4">
            <SocialMediaCard
              platform="youtube"
              username="CodeWise"
              url="https://youtube.com/@root-plat"
            />
            <SocialMediaCard
              platform="twitter"
              username="codewise"
              url="https://x.com/iamdroid3"
            />
          </section>
        </MaxWidthWrapper>
      </main>
      <Footer />
    </div>
  );
}
