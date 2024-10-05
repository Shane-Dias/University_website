import React from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import about_img from "../assets/about_img.jpg";
import "./About.css";
import "./Title.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="About" className="about_img" />
          <MdOutlinePlayCircleFilled className="about_icon" />
        </div>
        <div className="about-right">
          <div className="title about-title">
            <p>ABOUT UNIVERSITY</p>
            <h2>Nurtuing Tomorrow's Leaders Today</h2>
          </div>
          <p>
            Our University is dedicated to providing a world-class education
            that empowers students to achieve their full potential. With a rich
            history of academic excellence, our university has been at the
            forefront of cutting-edge research and holistic education. We pride
            ourselves on our diverse and inclusive community, where students
            from different backgrounds come together to learn, grow, and make
            meaningful contributions to the world.
          </p>
          <p>
            Our faculty comprises leading experts in their fields, committed to
            mentoring and guiding students through their academic journey. We
            offer a wide range of programs designed to meet the evolving demands
            of today’s industries, ensuring that our graduates are not only
            well-educated but also well-prepared for the future. Whether it’s in
            science, technology, arts, or humanities, Pinnacle Crest equips
            students with the knowledge, skills, and experience they need to
            excel.
          </p>
        </div>
      </div>
      <p className="about-bottom">
        Beyond academics, we are deeply invested in fostering a vibrant campus
        life where students can engage in extracurricular activities, develop
        leadership skills, and form lifelong connections. Our state-of-the-art
        facilities, coupled with strong industry partnerships, provide unique
        opportunities for hands-on learning and professional development. At
        Pinnacle Crest, we don’t just educate students; we inspire them to
        become leaders who will shape a better future.
      </p>
    </>
  );
};

export default About;
