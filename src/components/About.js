import "../css/About.css";
import abtImg from "../img/32.jpg";

const About = () => {
  return (
    <section>
      <div>
        <h2>About us</h2>
        <div className="img-wrap">
          <img className="img-abt" src={abtImg} alt="abt pic"></img>
        </div>
        <p>
          RegoDog is inspired by the unconditional love for our two standard
          schnauzers Valegro od Dalajskeho potoka and his son Blueberry od
          Dalajskeho potoka. RegoDog is an evolving project with many new ideas,
          past experiences and our never ending learnings and discovery we had
          in life with the two wonderful boys. RegoDog is simply as crazy as our
          team.
        </p>
      </div>
    </section>
  );
};
export default About;
