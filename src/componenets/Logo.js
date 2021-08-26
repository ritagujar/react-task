import React from "react";
import "./Logo.css";
import { Helmet } from "react-helmet";

const Logo = () => {
  return (
    <>
      <div className="logo-page">
        <div className="title">
          <div className="logo-heading">What is Logo design?</div>

          <Helmet>
            <title>Logo Design</title>
            <meta
              name="description"
              content=" Make your own brand identity through us. Start your design now"
            />
          </Helmet>
          <p className="paragraph">
            <span className="description">
              What is Logo design ? Logo tells the story of your brand. It
              enhances your brand image and speaks to your audience. Logo design
              makes the first impression for you in your working environment.
              Gives your business and brand an identity and projects a
              professional image. It creates memorable visuals to the outside
              world and build loyalty.
            </span>
          </p>

          <div className="bottom-bar">
            <div className="button-container">
              <button className="design">Start designing</button>

              <button className="quote">Get a quote</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
