import React from "react";
import styled from "styled-components";
import home from "../assets/home.png";

const Hero = () => {
  return (
    <HeroSection>
      <section className="home">
        <div className="home-img container">
          <img src={home} alt="" />
        </div>
      </section>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.div`
  .home {
    position: relative;
    background-color: #f2f0f1;
    min-height: 700px;
  }
  .home-img {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
  }
  .home-img img {
    max-width: 700px;
    width: 100%;
  }
  .home-img::before {
    content: "Coloring Style";
    font-size: 9rem;
    font-weight: 900;
    text-transform: uppercase;
    position: absolute;
    text-align: center;
    top: -28px;
    color: var(--main-color);
    z-index: -1;
  }
`;
