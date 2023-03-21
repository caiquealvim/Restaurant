import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import BannerBackground from "../Components/assets/home-banner-background.png";
import BannerImage from "../Components/assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Sua comida favorita entregue sempre quente e fresca.
          </h1>
          <p className="primary-text">
            Os chefes preparam tudo saudável,com muito trabalho e cuidado para
            você comer uma comida fresca.
          </p>
          <button className="secondary-button">
            Peça Agora
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
