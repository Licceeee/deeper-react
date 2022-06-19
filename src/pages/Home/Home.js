import React, { Fragment } from "react";
import "./Home.css";
import image from "../../assets/img/cards-img.svg";
import arrowDown from "../../assets/img/arrow-down2.svg";
import circleLine from "../../assets/img/circle-line.svg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import HeaderLG from "../../components/HeaderLG/HeaderLG";
import VerticalLine from "../../components/VerticalLine/VerticalLine";

const Home = () => {
  return (
    <Fragment>
      <VerticalLine />
      <HeaderLG />
      <div className="main-container mx-0 page-size">
        <div className="row col-12 first-section p-0 m-0">
          <div className="col-12 col-xl-6 inner-container p-0 m-0 first">
            <img src={image} className="img" alt="card deck"></img>
          </div>

          <div
            className="row col-12 col-xl-6 inner-container right-hero-side second"
          >
          {/* <div className="row col-12 col-xl-6 right-hero-side"> */}
            <div className="game-description-container text-left">
              <h2 className="pb-5"> Question game</h2>
              <p class="game-description">
                Play a question game to connect with friends, family, your
                partner and so on. 
                </p>
                <p class="game-description">                Discover new topics and dive deeper into
                each others characters.
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
              <Button
                text="Select a category"
                cssClass="btn next-button my-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
