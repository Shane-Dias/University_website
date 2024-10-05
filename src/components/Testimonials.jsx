import React from "react";
import Title from "./Title";
import "./Testimonials.css";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import user1 from "../assets/user_img1.jpg";
import user2 from "../assets/user_img2.jpg";
import user3 from "../assets/user_img3.jpg";
import user4 from "../assets/user_img4.jpg";
import { useRef } from "react";

const Testimonials = () => {
  const silder = useRef()
  let tx=0;
  const slide_front=() => {
    if (tx>-50) {
      tx-=25;
    }
    silder.current.style.transform=`translateX(${tx}%)`
  }
  
  const slide_back=() => {
    if (tx<0) {
      tx+=25;
    }
    silder.current.style.transform=`translateX(${tx}%)`
  }
  
  return (
    <div className="testimonials">
      <Title subtitle="TESTIMONIALS" title="Students Feedback" />
      <div className="silder-outer">
        <GrLinkNext className="btn-test next-btn" onClick={slide_front} />
        <GrLinkPrevious className="btn-test back-btn" onClick={slide_back}/>
        <div className="slider-inner">
          <ul ref={silder}>
            <li>
              <div className="user_card">
                <div className="user_info">
                  <img src={user1} alt="user_pfp" />
                  <div>
                    <h3 className="name">Jimmy Anderson</h3>
                    <span>Completed Master's Degree at Pinnacle Crest</span>
                  </div>
                </div>
                <p>
                  The programs here transformed my career and gave me the skills
                  I needed to succeed. The faculty is incredibly supportive and
                  always available to help. I highly recommend this university
                  to anyone looking for quality education. The hands-on learning
                  approach and the collaborative environment made a real
                  difference in my confidence. I felt well-prepared for the job
                  market after graduating. This university truly sets you up for
                  long-term success
                </p>
              </div>
            </li>
            <li>
              <div className="user_card">
                <div className="user_info">
                  <img src={user3} alt="user_pfp" />
                  <div>
                    <h3 className="name">Greta Rose</h3>
                    <span>Completed Graduation Degree at Pinnacle Crest</span>
                  </div>
                </div>
                <p>
                  I had an amazing experience at this
                  university—state-of-the-art facilities and a vibrant campus
                  life made learning exciting. The resources provided were
                  top-notch, and I felt completely prepared for my future
                  career. The diverse community of students and faculty helped
                  me broaden my perspective. Events and networking opportunities
                  were constant, allowing me to connect with industry
                  professionals. I can proudly say that this university shaped
                  me into a well-rounded professional.
                </p>
              </div>
            </li>
            <li>
              <div className="user_card">
                <div className="user_info">
                  <img src={user2} alt="user_pfp" />
                  <div>
                    <h3 className="name">Jimmy Anderson</h3>
                    <span>
                      Completed Post Graduation Degree at Pinnacle Crest
                    </span>
                  </div>
                </div>
                <p>
                  The education I received prepared me for real-world
                  challenges, and the connections I made have been invaluable in
                  my career. The university fosters a learning environment that
                  encourages personal growth and collaboration. Group projects
                  and presentations gave me practical experience that was
                  relevant to my field. I built lasting friendships and
                  professional networks that continue to help me today. This
                  university didn’t just teach me, it empowered me.
                </p>
              </div>
            </li>
            <li>
              <div className="user_card">
                <div className="user_info">
                  <img src={user4} alt="user_pfp" />
                  <div>
                    <h3 className="name">Mike Joseph</h3>
                    <span>Completed Graduation Degree at Pinnacle Crest</span>
                  </div>
                </div>
                <p>
                  The faculty goes above and beyond to ensure that every student
                  is equipped for success. From academic support to career
                  guidance, they truly care about their students’ futures. I
                  couldn't have asked for a better experience! The career
                  services team helped me land my first internship, and that led
                  to my current full-time job. The sense of community here is
                  incredible, and it feels like everyone is invested in your
                  growth. Choosing this university was the best decision I made
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
