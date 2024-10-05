import React from "react";
import "./Contact.css";
import Title from "./Title";
import { RiMessage2Fill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  const accessKey = import.meta.env.VITE_ACCESS_KEY;
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${accessKey}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <Title subtitle="CONTACT US" title="Get in Touch" />
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message!
            <RiMessage2Fill style={{ color: " rgb(245 127 23 / 78%)" }} />
          </h3>
          <p>
            Have any questions or need more information? We’d love to hear from
            you! Reach out to us via phone or email, and our team will be happy
            to assist you. You can also visit our campus to learn more about our
            programs and get a firsthand experience of university life. We look
            forward to connecting with you!
          </p>
          <ul>
            <li>
              <MdOutlineMail />
              pinnacle87crest@gmail.com
            </li>
            <li>
              <MdPhoneInTalk />
              +91 72-2879 1822
            </li>
            <li style={{ alignItems: "flex-start" }}>
              <MdLocationOn />
              Pinnacle Crest University <br /> 45 Knowledge Park, Sector 62,
              <br /> Noida, Uttar Pradesh 201301
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your mobile number" required />
            <label>Enter your message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              required
            ></textarea>
            <button className="mybtn darkbtn">Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
