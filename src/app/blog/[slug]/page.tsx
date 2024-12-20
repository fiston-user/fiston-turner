import { Metadata } from "next";
import { getBlogPost } from "@/lib/contentful";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found - Fiston Turner",
    };
  }

  return {
    title: `${post.fields.title} - Fiston Turner`,
    description: post.fields.excerpt || "Read this post on my blog.",
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#111010] text-white">
      <main className="flex-grow">
        <MaxWidthWrapper className="py-12 sm:py-20">
          <div className="mb-16 sm:mb-20">
            <Link
              href="/blog"
              className="group inline-flex items-center text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
            >
              <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to blog
            </Link>
            
            <article className="prose prose-invert prose-neutral max-w-none">
              <header className="mb-8 sm:mb-12 not-prose">
                <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                  {post.fields.title}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-neutral-400">
                  <time dateTime={post.sys.createdAt}>
                    {new Date(post.sys.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.fields.readingTime && (
                    <>
                      <span className="hidden sm:inline">·</span>
                      <span>{post.fields.readingTime} min read</span>
                    </>
                  )}
                </div>
              </header>

              <div className="space-y-6 text-neutral-300">
                {post.fields.content && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.fields.content,
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
