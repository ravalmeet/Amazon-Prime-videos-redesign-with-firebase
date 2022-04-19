import React from "react";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer.jsx";
import { SliderData } from "../../components/Slider/SliderData";

import "./home.css";
function Home() {
  return (
    <>
      <Navbar />
      <Slider slides={SliderData} />
      <br />
      <div className="filter">
        <p>Amazon Originals</p>
        <p>Action</p>
        <p>Drama</p>
        <p>Comedy</p>
        <p>Romance</p>
        <p>Horror</p>
        <p>Mystery</p>
        <p>Recommended For You</p>
      </div>
      <br />
      <List />
      <List />
      <List />
      <List />
      <Footer />
    </>
  );
}

export default Home;
