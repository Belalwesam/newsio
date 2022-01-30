import { fetchNews } from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";
const News = ({ category, pageSize, query, topHeading }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const init = async () => {
      const fetchedArticles = await fetchNews({
        category: category,
        query: query,
        pageSize: pageSize,
      });
      setArticles(fetchedArticles);
    };
    init();
  }, [category, query, pageSize, topHeading]);
  return (
    <>
      {articles.length > 0 ? (
        <div className="single-news-section-container mb-5">
          <h3 className="mb-4" style={{ fontWeight: "bold" }}>
            {topHeading}
          </h3>
          <div className="row">
            {articles.map((article) => (
              <div className="col-12 col-md-4 mb-4 " key={Math.random()}>
                <div className="single-article">
                  <div className="article-info">
                    <p className="m-0 article-source">
                      <span>
                        Source :{" "}
                        {article.source.name !== null
                          ? article.source.name
                          : "unknown"}
                      </span>
                    </p>
                    <p className="m-0 article-author">
                      {article.author !== null
                        ? "Author : " + article.author
                        : ""}
                    </p>
                  </div>
                  <div className="article-image">
                    <img
                      src={article.urlToImage}
                      alt=""
                      height={250}
                      className="img-fluid"
                    />
                  </div>
                  <div className="article-text">
                    <h6 className="article-heading">
                      <a href={article.url}>{article.title}</a>
                    </h6>
                    <p className="m-0 article-overview">
                      {article.content === null
                        ? article.description
                        : article.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default News;
