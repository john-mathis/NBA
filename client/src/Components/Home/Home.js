import React from "react";
import Hero from "../Hero/Hero";
import RecentGameScores from "../RecentGameScores/RecentGameScores";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <RecentGameScores />
      <Hero />
      <Slider />
    </>
  );
};

export default Home;
