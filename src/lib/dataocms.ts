export type Article = {
    id: string;
    title: string;
    slug: string;
    content: string;
  };
  
  export async function getArticles(): Promise<Article[]> {
    const res = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
            allArticles {
              id
              title
              slug
              content
            }
          }
        `,
      }),
      next: { revalidate: 60 },
    });
  
    if (!res.ok) {
      console.error('Villa við að sækja frá DatoCMS:', await res.text());
      return [];
    }
  
    const json = await res.json();
    return json.data?.allArticles ?? [];
  }
  