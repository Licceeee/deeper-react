import React from "react";
import "./Home.css";
import image from "../../assets/img/cards-img.svg";
import arrowDown from "../../assets/img/arrow-down2.svg";
import circleLine from "../../assets/img/circle-line.svg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="main-container mx-0">
      <div className="row col-12 first-section p-0 m-0">
        <div className="col-12 col-xl-6 inner-container p-0 m-0 first">
          <img src={image} className="img" alt="card deck"></img>
        </div>

        <div
          className="row col-12 col-xl-6 inner-container p-0 m-0 d-flex flex-column 
        align-content-center second"
        >
          <div className="text">
            <h2 className="pb-5"> Question game</h2>
            <p>
              Play a question game to discover Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
              <div className="svg-container pt-5">
                <img
                  src={circleLine}
                  className="circle-line"
                  alt="circle line"
                ></img>
              </div>
          </div>
        </div>

        <div className="section-choose-way-to-play">
          <div className="svg-container">
            <img src={arrowDown} className="arrow" alt="arrow down"></img>
          </div>

          <Link to="/categories">
            <Button text="Select a category" cssClass="btn light-button my-5" />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
