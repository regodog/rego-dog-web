import "../css/About.css";
import abtImg from "../img/32.jpg";

const About = () => {
  return (
    <section>
      <div>
        <h2>About us</h2>
        <div className="abt-grid-wrap">
          <div className="img-wrap">
            <img className="img-abt" src={abtImg} alt="abt pic"></img>
          </div>
          <div className="abt-paragraph-wrap">
            <p>
              Everything we do in RegoDog is inspired by the unconditional love
              for our two standard schnauzers Valegro od Dalajskeho potoka and
              his son Blueberry od Dalajskeho potoka. We are on a schnauzer
              journey which started when we brought a little black standard
              schnauzer puppy home. It was Valegro and despite many nickname
              suggestions like Egis, Ego, Vali, Valda, Vale we decided to call
              him Eggie. But soon Eggie turned out to have several other names
              like Egisek, Egoushek, Egonek, and now we even like to call him
              Gustik. Why did we come up with so many names? No idea, they are
              simply random, but Eggie knows they are all his. When Eggie was
              about four we brought home one of his offspring, BlueBerry. Berry,
              like Eggie, also has many nicknames like Berdik, Berda, Berin and
              Berousek. .....to continue....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
