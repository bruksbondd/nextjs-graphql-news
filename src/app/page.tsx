import fetchNews from '@/lib/fetchNews';
import { categories } from '../../constants';
import NewsList from '@/components/NewsList';

export default async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
