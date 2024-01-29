import "../css/News1.css";

const News1 = ({ header, date, img, paragraph }) => {
  return (
    <section>
      <h2>{header}</h2>
      <p style={{ fontStyle: "italic" }}>{date}</p>
      <div className="news1-wrap-grid">
        <div className="news-paragraph-wrap">
          {paragraph.map((paragraphSingle) => {
            return <p>{paragraphSingle}</p>;
          })}
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
export default News1;
