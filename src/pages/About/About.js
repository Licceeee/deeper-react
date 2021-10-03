import React, { Fragment } from "react";
import "./About.css";
import HeaderSM from "../../components/HeaderSM/HeaderSM";
import lic from "../../assets/img/avatars/lic.jpeg";
import fil from "../../assets/img/avatars/fil.jpeg";

const About = () => {
  return (
    <Fragment>
      <HeaderSM />
      <div className="page-size">
        <div className="contain">
          <h3 className="title">About us</h3>

          <div className="info-boxes">
            <div className="info-box">
              <img src={lic} alt="Alicia" className="avatar" />
              <h4>Alicia Schonefeld</h4>
              <h6>Full Stack Developer</h6>
              <div className="info">
                Enthusiastic full-stack web developer with a passion for the
                backend. Driven by curiosity, proactive, self-motivated, and a
                team player. Gaining a little knowledge each day, always looking
                for a chance of self-improvement, and keeping an eye on what's
                next. Good knowledge of Django, Python, React, JavaScript,
                Express, Node.js, Linux.
              </div>
            </div>

            <div className="info-box">
              <img src={fil} alt="Filip" className="avatar" />

              <h4>Filip Milicevic</h4>
              <h6>Designer</h6>

              <div className="info">
                I am graphic designer and illustrator specialized in branding &
                development of all aspects of visual identity of startups and
                products! I love working on & discovering a unique voice and
                style of brands through research, analysis & creative
                exploration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
