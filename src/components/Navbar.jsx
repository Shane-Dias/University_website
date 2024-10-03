import React, { useEffect, useState } from "react";
import "./navbar.css";
import { DiMagento } from "react-icons/di";

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
      <span>Pinnacle Crest</span><DiMagento className="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="mybtn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
