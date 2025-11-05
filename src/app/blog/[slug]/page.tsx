import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import type { Metadata } from "next";
import Image from "next/image";

type Params = { slug: string };

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      images: post.image ? [post.image] : ["/images/thumbnail.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: post.image ? [post.image] : ["/og-default.png"],
    },
  };
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    image: post.image ?? "/images/thumbnail.webp",
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <Image
          src={post.image ?? "/images/thumbnail.webp"}
          width={800}
          height={400}
          alt={post.summary ?? post.title}
        ></Image>
        <p>{post.summary}</p>
        <p>Ditulis oleh: {post.author}</p>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </article>
    </main>
  );
}