import "../css/News.css";
import news from "../news.json";
import NewsDisplay from "../utils/NewsDisplay";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [found, setFound] = useState(true);

  const currentPath = useLocation().pathname;
  const isEng = !(currentPath.includes("/cz") || currentPath.includes("/de"));
  const isCz = currentPath.includes("/cz");
  const isDe = currentPath.includes("/de");

  var newsHeader = "News";
  var newsSearch = "Search...";

  if (isCz) {
    newsHeader = "Novinky";
    newsSearch = "Hledej...";
  } else if (isDe) {
    newsHeader = "Nachricht";
    newsHeader = "Suchen";
  }

  const handleSearch = (value) => {
    setSearchTerm(value);
    var wasFound = true;
    if (isEng) {
      wasFound = news.news.some(
        (newsItem) =>
          value === "" ||
          newsItem.paragraph.some((str) =>
            str.toLowerCase().includes(value.toLowerCase())
          ) ||
          newsItem.date.includes(value.toLowerCase()) ||
          newsItem.header.toLowerCase().includes(value.toLowerCase())
      );
    } else if (isCz) {
      wasFound = news.news.some(
        (newsItem) =>
          value === "" ||
          newsItem.paragraph_cz.some((str) =>
            str.toLowerCase().includes(value.toLowerCase())
          ) ||
          newsItem.date.includes(value.toLowerCase()) ||
          newsItem.header_cz.toLowerCase().includes(value.toLowerCase())
      );
    } else if (isDe) {
      wasFound = news.news.some(
        (newsItem) =>
          value === "" ||
          newsItem.paragraph_de.some((str) =>
            str.toLowerCase().includes(value.toLowerCase())
          ) ||
          newsItem.date.includes(value.toLowerCase()) ||
          newsItem.header_de.toLowerCase().includes(value.toLowerCase())
      );
    }
    setFound(wasFound);
  };

  var searchedRes = null;
  if (isEng) {
    searchedRes = news.news.map(
      (newsItem) =>
        (searchTerm === "" ||
          newsItem.paragraph.some((str) =>
            str.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          newsItem.date.includes(searchTerm.toLowerCase()) ||
          newsItem.header.toLowerCase().includes(searchTerm.toLowerCase())) && (
          <Link
            key={newsItem.link + "-news"}
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
  } else if (isCz) {
    searchedRes = news.news.map(
      (newsItem) =>
        (searchTerm === "" ||
          newsItem.paragraph_cz.some((str) =>
            str.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          newsItem.date.includes(searchTerm.toLowerCase()) ||
          newsItem.header_cz
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) && (
          <Link
            key={newsItem.link + "-news-cz"}
            to={"/cz/" + newsItem.link}
            className="news-link-display"
          >
            <NewsDisplay
              header={newsItem.header_cz}
              date={newsItem.date}
              paragraph={newsItem.paragraph_cz}
              thumbnail={newsItem.thumbnail}
            />
          </Link>
        )
    );
  } else if (isDe) {
    searchedRes = news.news.map(
      (newsItem) =>
        (searchTerm === "" ||
          newsItem.paragraph_de.some((str) =>
            str.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          newsItem.date.includes(searchTerm.toLowerCase()) ||
          newsItem.header_de
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) && (
          <Link
            key={newsItem.link + "-news-de"}
            to={"/de/" + newsItem.link}
            className="news-link-display"
          >
            <NewsDisplay
              header={newsItem.header_de}
              date={newsItem.date}
              paragraph={newsItem.paragraph_de}
              thumbnail={newsItem.thumbnail}
            />
          </Link>
        )
    );
  }
  return (
    <section>
      <h2>{newsHeader}</h2>
      <div className="news-grid-wrap">
        {found ? (
          <div className="news-grid">{searchedRes}</div>
        ) : (
          <div className="news-no-resut-found">
            {isEng && <p>No results found.</p>}
            {isCz && <p>Nebyly nalezeny žádné výsledky.</p>}
            {isDe && <p>Keine Ergebnisse gefunden.</p>}
          </div>
        )}

        <div className="news-side-panel">
          <input
            type="text"
            className="news-search-box"
            placeholder={newsSearch}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};
export default News;
