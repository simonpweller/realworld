import Sidebar from "../components/Sidebar";
import ArticlePreviewList from "../components/ArticlePreviewList";

export default function HomePage(): JSX.Element {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <ArticlePreviewList />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
