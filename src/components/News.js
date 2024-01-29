import "../css/News.css";
import news from "../news.json";
import NewsDisplay from "../utils/NewsDisplay";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [found, setFound] = useState(true);

  const handleSearch = (value) => {
    setSearchTerm(value);
    const wasFound = news.news.some(
      (newsItem) =>
        value === "" ||
        newsItem.paragraph.some((str) =>
          str.toLowerCase().includes(value.toLowerCase())
        ) ||
        newsItem.date.includes(value.toLowerCase()) ||
        newsItem.header.toLowerCase().includes(value.toLowerCase())
    );
    setFound(wasFound);
  };

  const searchedRes = news.news.map(
    (newsItem) =>
      (searchTerm === "" ||
        newsItem.paragraph.some((str) =>
          str.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        newsItem.date.includes(searchTerm.toLowerCase()) ||
        newsItem.header.toLowerCase().includes(searchTerm.toLowerCase())) && (
        <Link
          key={newsItem.link}
          to={newsItem.link}
          className="news-link-display"
        >
          <NewsDisplay
            header={newsItem.header}
            date={newsItem.date}
            paragraph={newsItem.paragraph}
            thumbnail={newsItem.thumbnail}
          />
        </Link>
      )
  );
  return (
    <section>
      <h2>News</h2>
      <div className="news-grid-wrap">
        {found ? (
          <div className="news-grid">{searchedRes}</div>
        ) : (
          <div className="news-no-resut-found">
            <p>No results found.</p>
          </div>
        )}

        <div className="news-side-panel">
          <input
            type="text"
            className="news-search-box"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};
export default News;
