import ArticlePreview from "../components/ArticlePreview";
import { ArticlesResponse } from "../models";
import useSWR from "swr";

export default function ArticlePreviewList(): JSX.Element {
  const { data, error } = useSWR<ArticlesResponse>(
    "https://conduit.productionready.io/api/articles"
  );

  if (!data) return <div>Loading articles...</div>;
  if (error) return <div>Failed to fetch articles</div>;
  return (
    <div>
      {data.articles.map((article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
    </div>
  );
}
