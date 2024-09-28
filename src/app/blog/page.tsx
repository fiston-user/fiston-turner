/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { getBlogPosts, BlogPost } from "@/lib/contentful";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my latest thoughts, insights, and tutorials on software development",
  openGraph: {
    title: "Blog | Fiston - Portfolio",
    description:
      "Read my latest thoughts, insights, and tutorials on software development",
  },
};

export const VerificationBadge = () => (
  <svg
    className="w-4 h-4 text-black dark:text-white inline-block ml-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  const breadcrumbItems = [{ label: "Blog", href: "/blog" }];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <section className="space-y-6">
          {blogPosts.length > 0 ? (
            blogPosts.map((post: BlogPost) => (
              <article key={post.sys.id}>
                <time className="text-gray-500 dark:text-gray-400">
                  {new Date(post.sys.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-xl font-semibold">
                  <Link
                    href={`/blog/${post.fields.slug}`}
                    className="hover:underline"
                  >
                    {post.fields.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  by {post.fields.author}
                  <VerificationBadge />
                </p>
              </article>
            ))
          ) : (
            <p>
              No blog posts found. Check Contentful for the &apos;blogPost&apos;
              content type.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
