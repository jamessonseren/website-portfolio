import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import "./index.css";

type ContractProps = {
  id: string
}
export default function Contact({id}: ContractProps) {
  return (
    <section id={id} className="contact-section">
      <h1>Contact</h1>
      <div className="contact-content">
        <div className="social-media">
          <div className="linkedin social-media-item">
            <a
              href="https://www.linkedin.com/in/jamesson-seren/"
              target="_blank"
            >
              <FaLinkedin className="react-icons" color="#0077B5" />
            </a>
            <p> https://www.linkedin.com/in/jamesson-seren/</p>
          </div>
          <div className="github social-media-item">
            <a href="https://github.com/jamessonseren">
              <FaGithub
                className="react-icons"
                color="var(--white)"
              />
            </a>
            <p> https://github.com/jamessonseren</p>
          </div>
          <div className="youtube social-media-item">
            <a href="https://www.youtube.com/@Tech_JS">
              <FaYoutube className="react-icons" color="#FF0000" />
            </a>
            <p> https://www.youtube.com/@Tech_JS</p>
          </div>
          <div className="email social-media-item">
            <IoMdMail className="react-icons" color="var(--white)" />
            <p> jamesson_seren@hotmail.com</p>
          </div>
        </div>

        <div className="contact-text">
          <p>
            Ready to take your project to the next level? Get in touch and let's
            turn your ideas into reality! Together, we can create something
            extraordinary and make a lasting impact. Don't waste any time, I'm
            here to help you achieve success. Let's build something amazing
            together!
          </p>
        </div>
      </div>
    </section>
  );
}
