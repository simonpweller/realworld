import ArticlePreview from "../components/ArticlePreview";
import { ArticlesResponse } from "../models";
import useSWR from "swr";

export default function Home(): JSX.Element {
  const { data, error } = useSWR<ArticlesResponse>(
    "https://conduit.productionready.io/api/articles"
  );

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Failed to fetch articles</div>;
  return (
    <div>
      {data.articles.map((article) => (
        <ArticlePreview article={article} />
      ))}
    </div>
  );
}
