import "../css/NewsDisplay.css";

const NewsDisplay = ({ header, date, paragraph, thumbnail }) => {
  const cutPar = paragraph[0];
  const wordLimit = 50;
  const wordsArray = cutPar.split(/\s+/);

  var truncatedString = wordsArray.slice(0, wordLimit).join(" ");
  truncatedString += " [...]";

  return (
    <div className="news-box-wrap">
      <h2 className="news-h2">{header}</h2>
      <div className="news-display-wrap">
        <img
          className="news-thumbnail"
          src={require(`../img/${thumbnail}`)}
          alt={header}
        ></img>
        <p className="news-p">{truncatedString}</p>
      </div>
      <p className="news-p">{date}</p>
    </div>
  );
};
export default NewsDisplay;
