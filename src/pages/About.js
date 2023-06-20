import React from "react";
import video from "../assets/8.mp4";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <video className="aboutTop" controls>
        <source src={video} type="video/mp4" />
      </video>
      <div className="aboutBottom">
        <h1>ABOUT ME</h1>
        <p>
        "It's difficult to explain to others how I am and how I feel, which is why I implemented the entire website in English with the aim of few people understanding. I feel like a little piece of me is within this website. The truth is, the most challenging part was commenting on each image on the website because I would give anything to be in Brooklyn or Boston. I feel that the reality I experienced there was more optimal than the one I lived in Ecuador. I won't deny that the change to adapt was difficult since NY and BO will always have a part of me there, where I discovered that I can be myself without the problem of people judging you." <br></br>
        <br></br>
        The video is in an art gallery in Manhattan, where I discovered that in a place as globalized and chaotic as NY, you can find peace in places like the one in the video. It was very interesting for me because it wasn't a moment of peace since I felt like something was missing that day. But well, that something is 40 minutes away from me in Monsey, specifically.
        </p>
      </div>
    </div>
  );
}

export default About;
