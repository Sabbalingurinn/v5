import Link from 'next/link';
import { getArticles } from '../lib/dataocms';

export default async function Home() {
  const articles = await getArticles();
  console.log('🧪 articles:', articles);

  return (
    <main>
      <h1>Forsíða</h1>
      <p>Velkomin á síðuna!</p>
      {articles.length > 0 && (
        <section>
          <h2>Síðasta grein:</h2>
          <h3>{articles[0].title}</h3>
          <p>{articles[0].content}</p>
        </section>
      )}
      <Link href='/articles'>Tjékkaðu á öllum articles!</Link>
    </main>
  );
}
