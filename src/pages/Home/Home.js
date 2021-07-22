import React from "react";
import "./Home.css";
import image from "../../assets/img/cards-img.svg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-container mx-0">
      <div className="row col-12 first-section p-0 m-0">
        <div className="col-12 col-xl-6 inner-container p-0 m-0">
          <img src={image} className="img"></img>
        </div>

        <div
          className="row col-12 col-xl-6 inner-container p-0 m-0 d-flex flex-column 
        align-content-center"
        >
          <div className="text">
            <h2 className="pb-5"> Question game</h2>
            <p>
              Play a question game to discover Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="section-choose-way-to-play">
        <Link to="/categories">
          <Button text="Select a category" cssClass="btn home-button my-5" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
