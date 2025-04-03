import Link from 'next/link';
import { getArticles } from '../../../lib/dataocms';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export default async function ArticlePage({ params }: Props) {
  const articles = await getArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) return <p>Grein fannst ekki.</p>;

  return (
    <main>
      <h1>{article.title}</h1>
      <p>{articles[0].content}</p>
      <Link href='/articles'>Til baka!</Link>
    </main>
  );
}
