import React, { Fragment } from "react";
import "./Contact.css";
import HeaderSM from "../../components/HeaderSM/HeaderSM";

const Contact = () => {
  return (
    <Fragment>
      <HeaderSM />
      <div className="page-size">
        <div className="contain">
          <h3 className="title">Contact us</h3>

          <div className="contact-boxes">
            <div className="contact-box">
              <h4>Alicia Schonefeld</h4>
              <h6>Full Stack Developer</h6>

              <div className="contact">
                <i class="far fa-envelope icon"></i>
                <a
                  href="mailto:schonefeld.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Me
                </a>
              </div>

              <div className="contact">
                <i class="fab fa-linkedin-in icon"></i>
                <a
                  href="https://www.linkedin.com/in/alicia-schonefeld/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>

              <div className="contact">
                <i class="fas fa-portrait icon"></i>
                <a
                  href="https://tornode.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Homepage
                </a>
              </div>

              <div className="contact">
                <i class="fab fa-instagram icon"></i>
                <a
                  href="https://www.instagram.com/licceeee/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="contact-box">
              <h4>Filip Milicevic</h4>
              <h6>Designer</h6>

              <div className="contact">
                <i class="far fa-envelope icon"></i>
                <a
                  href="mailto:fil.milicevic@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Me
                </a>
              </div>

              <div className="contact">
                <i class="fab fa-linkedin-in icon"></i>

                <a
                  href="https://www.linkedin.com/in/filip-milicevic-1b3b648a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>

              <div className="contact">
                <i class="fab fa-behance icon"></i>
                <a
                  href="https://www.behance.net/filmilicevic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </div>

              <div className="contact">
                <i class="fab fa-instagram icon"></i>
                <a
                  href="https://www.instagram.com/fil.milicevic/"
                  target="_blank" rel="noopener noreferrer"
                > 
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
