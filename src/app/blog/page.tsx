/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import { getBlogPosts, BlogPost } from "@/lib/contentful";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Fiston Turner",
  description: "Thoughts on design systems, accessibility, and user experience.",
};

export default async function Blog() {
  const posts = await getBlogPosts();

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
            <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Writing</h1>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {posts.length > 0 ? (
              posts.map((post: BlogPost) => (
                <article key={post.sys.id} className="group">
                  <Link
                    href={`/blog/${post.fields.slug}`}
                    className="block group-hover:opacity-70 transition-opacity"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0">
                        <h2 className="font-display text-lg sm:text-xl text-neutral-200">
                          {post.fields.title}
                        </h2>
                        <time className="text-xs sm:text-sm text-neutral-500 sm:ml-8">
                          {new Date(post.sys.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </div>
                      {post.fields.content && (
                        <p className="text-sm sm:text-base text-neutral-400 line-clamp-2">
                          {post.fields.content}
                        </p>
                      )}
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <p className="text-neutral-400">No blog posts found.</p>
            )}
          </div>
        </MaxWidthWrapper>
      </main>
    </div>
  );
}
