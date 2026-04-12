import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { getPostBySlug, getAllPostSlugs, blogPosts } from "@/lib/blog-posts";
import Image from "next/image";
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo" };

  return {
    title: post.title,
    description: post.resumen,
    alternates: {
      canonical: `https://zonaweb.site/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.resumen,
      url: `https://zonaweb.site/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-10 bg-background">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 pb-24">
        {/* VOLVER */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>

        {/* HEADER */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="w-4 h-4 shrink-0" />
            <time dateTime={post.fechaIso}>{post.fecha}</time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>
        </header>

        {/* CONTENIDO POR BLOQUES */}
        <div className="text-[15px] sm:text-base leading-relaxed">
          {post.contenido.map((block, i) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2
                    key={i}
                    className="text-2xl mt-4 mb-2 font-bold text-foreground"
                  >
                    {block.content}
                  </h2>
                );

              case "h3":
                return (
                  <h3 key={i} className="text-xl font-semibold text-foreground">
                    {block.content}
                  </h3>
                );

              case "img":
                return (
                  <Image
                    key={i}
                    src={block.src}
                    alt={block.alt}
                    width={800}
                    height={450}
                    className="rounded-xl my-6"
                  />
                );

              case "cta":
                return (
                  <div
                    key={i}
                    className=" rounded-2xl border border-primary/30 bg-primary/5 p-5 my-3"
                  >
                    <p className="text-foreground font-medium mb-3">
                      {block.content}
                    </p>
                    <Link
                      href="/#contacto"
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
                    >
                      Pedir mi web
                    </Link>
                  </div>
                );

              default:
                return (
                  <p key={i} className="text-muted-foreground">
                    {block.content}
                  </p>
                );
            }
          })}
        </div>

        {/* FOOTER */}
        <footer className="mt-16 pt-10 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Más artículos</p>

          <ul className="space-y-2">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </footer>
      </article>
    </main>
  );
}
