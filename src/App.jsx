import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Program from "./components/Program";
import Title from "./components/Title";
import About from "./components/About";
import Campus from "./components/Campus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="pcontainer">
        <Title subtitle="OUR PROGRAM" title="What we Offer" />
        <Program />
      </div>
      <About />
      <Campus/>
    </div>
  );
};

export default App;
