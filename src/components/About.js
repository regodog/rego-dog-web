import "../css/About.css";
import abtImg from "../img/32.jpg";
import { useLocation } from "react-router-dom";

const About = () => {
  const currentPath = useLocation().pathname;
  const isEng = !(currentPath.includes("/cz") || currentPath.includes("/de"));
  const isCz = currentPath.includes("/cz");
  const isDe = currentPath.includes("/de");
  var abtHeader = "About us";
  if (isCz) {
    abtHeader = "O nás";
  } else if (isDe) {
    abtHeader = "Über uns";
  }
  return (
    <section>
      <div>
        <h2>{abtHeader}</h2>
        <div className="abt-grid-wrap">
          <div className="img-wrap">
            <img className="img-abt" src={abtImg} alt="abt pic"></img>
          </div>
          <div className="abt-paragraph-wrap">
            {isEng && (
              <p>
                Everything we do in RegoDog is inspired by the unconditional
                love for our two standard schnauzers Valegro od Dalajskeho
                potoka and his son Blueberry od Dalajskeho potoka. We are on a
                schnauzer journey which started when we brought a little black
                standard schnauzer puppy home. It was Valegro and despite many
                nickname suggestions like Egis, Ego, Vali, Valda, Vale we
                decided to call him Eggie. But soon Eggie turned out to have
                several other names like Egisek, Egoushek, Egonek, and now we
                even like to call him Gustik. Why did we come up with so many
                names? No idea, they are simply random, but Eggie knows they are
                all his. When Eggie was about four we brought home one of his
                offspring, BlueBerry. Berry, like Eggie, also has many nicknames
                like Berdik, Berda, Berin and Berousek. .....to continue....
              </p>
            )}
            {isCz && (
              <p>
                Vše, co v RegoDog děláme, je inspirováno bezpodmínečnou láskou k
                našim dvěma standardním kníračům Valegro od Dalajského potoka a
                jeho synovi Blueberry od Dalajského potoka. Jsme na kníračské
                cestě, která začala, když jsme si domů přivezli štěňátko černého
                standardního knírače. Byl to Valegro a přes mnoho návrhů
                přezdívek jako Egis, Ego, Vali, Valda, Vale jsme se rozhodli mu
                říkat Eggie. Ale brzy se ukázalo, že Eggie má několik dalších
                jmen jako Egisek, Egoushek, Egonek a nyní mu dokonce rádi říkáme
                Gustik. Proč jsme vymysleli tolik jmen? Nemám ponětí, jsou
                prostě náhodné, ale Eggie ví, že jsou všechny jeho. Když byly
                Eggiemu asi čtyři roky, přivedli jsme domů jednoho z jeho
                potomků, BlueBerry. Berry, stejně jako Eggie, má také mnoho
                přezdívek jako Berdík, Berda, Berin a Berousek.
                .....pokračovat....
              </p>
            )}
            {isDe && (
              <p>
                Alles, was wir bei RegoDog tun, ist vom Unbedingten inspiriert
                Liebe für unsere beiden Standardschnauzer Valegro od Dalajskeho
                Potoka und sein Sohn Blueberry od Dalajskeho Potoka. Wir sind
                auf einem Schnauzer-Reise, die begann, als wir ein kleines
                Schwarzes mitbrachten Standard-Schnauzer-Welpenheim. Es war
                Valegro und trotz vieler Spitznamenvorschläge wie Egis, Ego,
                Vali, Valda, Vale we beschloss, ihn Eggie zu nennen. Aber bald
                stellte sich heraus, dass Eggie es getan hatte mehrere andere
                Namen wie Egisek, Egoushek, Egonek und jetzt wir Ich nenne ihn
                sogar gerne Gustik. Warum haben wir uns so viele ausgedacht?
                Namen? Keine Ahnung, sie sind einfach zufällig, aber Eggie weiß,
                dass sie es sind alle seine. Als Eggie etwa vier Jahre alt war,
                brachten wir eines von ihm mit nach Hause Nachkommen, BlueBerry.
                Berry hat wie Eggie auch viele Spitznamen wie Berdik, Berda,
                Berin und Berousek. .....weitermachen....
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
