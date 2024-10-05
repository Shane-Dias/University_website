import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Program from "./components/Program";
import Title from "./components/Title";
import About from "./components/About";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

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
      <Testimonials />
      <Contact/>
    </div>
  );
};

export default App;
