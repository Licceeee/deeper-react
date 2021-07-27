import React from "react";
import "./Home.css";
import image from "../../assets/img/cards-img.svg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Triangle from "../../components/Triangle/Triangle";

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
          </div>
        </div>
        <div className="section-choose-way-to-play">
          <Link to="/categories">
            <Button text="Select a category" cssClass="btn home-button my-5" />
          </Link>
        </div>
        {/* <div className="section-choose-way-to-play">
          <Triangle />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
