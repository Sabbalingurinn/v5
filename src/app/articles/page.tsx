import Link from 'next/link';
import { getArticles } from '../../lib/dataocms';

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main>
      <h1>Greinar</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link href='/'>Forsíðan</Link>
    </main>
  );
}
