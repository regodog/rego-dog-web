import "../css/News.css";
import news from "../news.json";
import NewsDisplay from "../utils/NewsDisplay";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
    // Add any additional search logic here if needed
  };
  return (
    <section>
      <h2>News</h2>
      <div className="news-grid-wrap">
        <div className="news-grid">
          {news.news.map((newsItem) => (
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
          ))}
        </div>
        <div className="news-side-panel">
          <input
            type="text"
            className="news-search-box"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
          />
          <p>Search Term: {searchTerm}</p>
        </div>
      </div>
    </section>
  );
};
export default News;
