import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/rao-habib-54a755295/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — rao-habib
              </a>
            </p>
            <h4>Email</h4>
            <p>
              <a
                href="mailto:raohabib597@gmail.com"
                data-cursor="disable"
              >
                raohabib597@gmail.com
              </a>
            </p>
            <h4>Skills</h4>
            <p>
              Frontend: Next.js, React.js, JavaScript, TypeScript, Tailwind CSS, REST API
            </p>
            <p>
              Backend: Node.js, SQL, ASP.NET
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/RAO-HABIB"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rao-habib-54a755295/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:raohabib597@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>Habib Ur Rehman Rao</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;