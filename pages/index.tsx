import { useEffect, useState } from "react";
import ArticlePreview from "../components/ArticlePreview";
import { Article, ArticlesResponse } from "../models";

export default function Home(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);

  async function fetchArticles() {
    const response: ArticlesResponse = await fetch(
      "https://conduit.productionready.io/api/articles"
    ).then((res) => res.json());
    setArticles(response.articles);
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <ArticlePreview article={article} />
      ))}
    </div>
  );
}
