import "./components/nav.css";
import "./components/hero.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";
import Des from "./components/Des";
import Footer from "./components/Footer";
// import Feedback from "./components/Feedback";

import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Categories />
      <AboutUs />
      <Des />
  {/* <Feedback /> */}
      <Footer />
    </>
  );
}

export default App;
