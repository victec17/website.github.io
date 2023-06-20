import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/logo.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> My Life </h1>
        <p> Through moments </p>
        <Link to="/menu">
          <button> PICTURES </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
