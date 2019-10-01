import React from "react";
import Header from "./components/header";
import Icon from "./components/icons";
import Slider from "./components/slider";
import LivingSlider from "./components/livingSlider";
import Welcome from "./components/welcome";
import Price from "./components/pricing";
import Gallery from "./components/gallery";
import Location from "./components/location";
import Contact from "./components/contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Welcome />
      <Icon />
      <LivingSlider />
      <Price />
      <Gallery />
      <Location />
      <Contact />
    </div>
  );
}

export default App;
