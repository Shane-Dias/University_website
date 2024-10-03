import React from "react";
import "./Program.css";
import program1 from "../assets/program1.jpg";
import program2 from "../assets/program2.jpg";
import program3 from "../assets/program3.jpg";
import { HiAcademicCap } from "react-icons/hi2";
import { MdEngineering } from "react-icons/md";
import { TbHexagonLetterMFilled } from "react-icons/tb";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="Program1" />
        <div className="caption">
          <HiAcademicCap className="program-icons" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="Program2" />
        <div className="caption">
          <TbHexagonLetterMFilled className="program-icons" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="Program3" />
        <div className="caption">
          <MdEngineering className="program-icons" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
