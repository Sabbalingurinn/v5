// src/app/articles/[slug]/page.tsx

/* eslint-disable @typescript-eslint/no-explicit-any */


import { getArticles } from '@/lib/dataocms';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

// 👇 Lausnin hér: við týpum ekki neitt sjálf – látum Next.js sjá um params
export default async function ArticlePage(props: any) {
  const slug = props?.params?.slug;
  const articles = await getArticles();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <main>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <Link href="/articles">Til baka!</Link>
    </main>
  );
}
