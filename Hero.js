import React from "react";
import "./Hero.css";


const Hero =({imageSrc}) =>{
    return (
    <div
        className ="Hero">
        <img src={imageSrc} alt="StartUpHive" className="Hero_image"/>
        <h1 className ="hero_title">STARTUPHIVE</h1>
        <h4 className ="hero_title2">Development made easy.</h4>
        
    </div>
    );
};
export default Hero;
