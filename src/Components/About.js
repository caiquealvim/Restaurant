import React from "react";
import AboutBackground from "../Components/assets/about-background.png";
import AboutBackgroundImage from "../Components/assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-backgound-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-div">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">sobre</p>
        <h1 className="primary-heading">
          Comida é a parte mais importante de uma Dieta Balanceada.
        </h1>
        <p className="primary-text"></p>
        <div className="about-buttons-container">
          <button className="secondary-button">Aprenda Mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill />
            Assita ao Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
