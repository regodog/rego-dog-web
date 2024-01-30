import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const currentPath = useLocation().pathname;
  const isCz = currentPath.includes("/cz");
  const isEng = !currentPath.includes("/cz");
  var contactHeader = "Contact";
  if (isCz) {
    contactHeader = "Kontakt";
  }
  return (
    <footer>
      <h2>{contactHeader}</h2>
      {isEng && <p>Phone: (+1) 646-702-3278</p>}
      {isCz && <p>Telefonní číslo: (+1) 646-702-3278</p>}
      <div className="contact-social-icons">
        <a
          href="https://www.instagram.com/rego_dog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            style={{ color: "white" }}
          />
        </a>
      </div>
      <p>&copy; 2024 RegoDog</p>
    </footer>
  );
};
export default Contact;
