import React, { useEffect, useState } from "react";
import "./navbar.css";
import { DiMagento } from "react-icons/di";
import { Link } from "react-scroll";

const Navbar = () => {
  const [is_fixed, setIs_fixed] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY>50? setIs_fixed(true):setIs_fixed(false);
    }
    )
  }, [])
  
  return (
    <nav className={`navbar pcontainer ${is_fixed?"darknav":""}`}>
      <div className="logobox">
      <DiMagento className="logo" /><span style={{color:"white"}}>Pinnacle Crest</span>
      </div>
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link> </li>
        <li><Link to="programs" smooth={true} offset={-220} duration={500}>Program</Link> </li>
        <li><Link to="about" smooth={true} offset={-100} duration={500}>About us</Link> </li>
        <li><Link to="campus" smooth={true} offset={-50} duration={500}>Campus</Link> </li>
        <li><Link to="testimonials" smooth={true} offset={-90} duration={500}>Testimonials</Link> </li>
        <li>
          <button className="mybtn"><Link to="contact" smooth={true} offset={-90} duration={500}>Contact us</Link></button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
