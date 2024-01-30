import "../css/News2.css";

const News2 = ({ header, date, img, youtube, paragraph }) => {
  return (
    <section>
      <h2>{header}</h2>
      <p style={{ fontStyle: "italic" }}>{date}</p>
      <div className="news1-wrap-grid">
        <div className="news-paragraph-wrap">
          {paragraph.map((paragraphSingle) => {
            return <p>{paragraphSingle}</p>;
          })}
          <iframe
            width="640"
            height="390"
            src={youtube}
            title="Embedded YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="news-gallery">
          {img.map((imgString) => (
            <img src={require(`../img/${imgString}`)} alt={header}></img>
          ))}
        </div>
      </div>
    </section>
  );
};
export default News2;
