import React from "react";
import "./About.css";
// import left from "../images/left-arrow.png";
// import vector1 from "../images/Vector.png";
// import drone from "../images/Drone.webp";

const About = () => {
  return (
    <>
      {/* <div className="top-pannel">
        <img className="left-arrow" src={left} alt="left-arrow" />
        <img className="vector1" src={drone} alt="vector1" />
      </div> */}
      <div className="about">
        <div className="title">
          <h2 className="about-heading">About us</h2>
          <h4 className="sub-heading">
            <a href="/">Fliqaindia</a> for everyone
          </h4>

          <p className="paragraph">
            <span className="description">
              With this belief, we at Fliqaindia started our journey 5 years ago
              with the belief that everyone has the right to quality photography
              to help them better capture and conserve their special moments. We
              have been appreciated and recommended by Start Up India, StartUp
              Bengal, Imagesbazaar and Digital India for our novel initiative.
              We have partnered with Canvera to give you the best service
              possible. We are also trusted by Justdial, WedMEGood, Shaadisaga,
              weddingwire and so many well known event organisers.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
