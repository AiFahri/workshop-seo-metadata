import Link from "next/link";
import { posts } from "@/lib/posts";

export default function HomePage() {
  return (
    <>
      <header>
          <h1 className="text-3xl font-bold text-center py-8">SEO Metadata</h1>
      </header>
      <main>
        <section aria-labelledby="blog" className="max-w-prose m-auto space-y-5">
          <h2 id="blog" className="text-2xl font-bold">Artikel Terbaru</h2>
          <ul>
            {posts.map((p) => (
              <li key={p.slug}>
                <article>
                  <h3>
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </h3>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
