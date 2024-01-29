import "../css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <footer>
      <h2>Contact</h2>
      <p>Phone: 646-702-3278</p>
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
