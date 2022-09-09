import React from "react";
import { BsGithub, BsTelephoneFill } from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div id="contact" name="Contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="subtitle">Contact Me</h1>
            <p>
              <AiFillMail className="svg_icons" />
              &emsp;puripat.lai@gmail.com
            </p>
            <p>
              <BsTelephoneFill className="svg_icons" />
              &emsp;061-4535-626
            </p>
            <div className="social-icon">
              <a href="https://github.com/puripatkeng" target="_blank">
                <BsGithub />
              </a>
              <a
                href="https://drive.google.com/file/d/1xp3lYsHPlTeIqxJxrp2HG1GzxXkfJ2zP/view?usp=sharing"
                target="_blank"
              >
                <IoDocumentTextSharp /> CV
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form>
              <input
                type="text"
                name="Name"
                placeholder="Your name"
                required
              ></input>
              <input
                type="email"
                name="Email"
                placeholder="Your email address"
                required
              ></input>
              <textarea
                name="Message"
                placeholder="Your message"
                rows="6"
              ></textarea>
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
