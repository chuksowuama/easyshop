import React, { useEffect, useState } from "react";
import "./HeroSect.css";
import { HerosectImg } from "../../AlldataAssest";
import { Link } from "react-router-dom";
import Navigation from "../NAVIGATION/Navigation";

const HeroSect = () => {
  const [currentslide, setCurrentslide] = useState(0);
  const [defaultimg, setDefaultimg] = useState(HerosectImg[0]);
  const [cond, setcond] = useState(true);
  let interval;

  const handleMouseover = () => {
    clearInterval(interval);
  };
  function handleMouseout() {
    interval = setInterval(() => {
      setCurrentslide((prevslide) => (prevslide + 1) % HerosectImg.length);
    });
  }
  useEffect(() => {
    interval = setInterval(() => {
      setCurrentslide((prevslide) => (prevslide + 1) % HerosectImg.length);
      setcond(!cond);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentslide, HerosectImg.length, cond]);
  return (
    <>
      <div
        className="heroContainer"
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseout}
      >
        <div className="wrapp">
          {HerosectImg &&
            HerosectImg &&
            HerosectImg.map((hero, index) => (
              <div
                className={`heroslide ${
                  currentslide === index ? "hero-active" : ""
                }`}
              >
                <div className="heroimg-Container">
                  <img src={hero.Himage} alt="" />
                  <div className="heroContent">
                    <h1 className={hero.clsName} id={hero.clsName2}>
                      {hero.HeroTitle}
                    </h1>
                    <h2 className={hero.subTitleClass}>{hero.HeroSubtitle}</h2>
                    <button className={hero.buttonClass} id={hero.buttonId}>
                    <Link to={hero.url} className="heroLink">
                    {hero.buttonText}
                    </Link> 
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HeroSect;
