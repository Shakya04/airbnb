import React from "react";
import image from "../images/group-img.png"

export default function Hero(){
    return(
        <section className="hero-container">
            <img className="photo" src={image} />
            <h1 className="hero-head">Online Experiences</h1>
            <p className="hero-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}