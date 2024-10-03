import React from "react";
import "./Campus.css";
import Title from "./Title.jsx";
import campus1 from "../assets/campus_img1.jpg";
import campus2 from "../assets/campus_img2.jpg";
import campus3 from "../assets/campus_img3.jpg";
import campus4 from "../assets/campus_img4.jpg";
import { IoIosArrowForward } from "react-icons/io";

const Campus = () => {
  return (
    <div className="campus">
      <Title subtitle="Gallery" title="Campus Photos" />
      <div className="gallery">
        <img src={campus1} alt="College Img" />
        <img src={campus2} alt="Classroom Img" />
        <img src={campus3} alt="Library Img" />
        <img src={campus4} alt="Sports Facilities" />
      </div>
      <button className="mybtn darkbtn" style={{margin:"1rem auto"}}>
          See More <IoIosArrowForward />
        </button>
    </div>
  );
};

export default Campus;
