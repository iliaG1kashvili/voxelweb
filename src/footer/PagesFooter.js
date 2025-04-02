// src/PagesFooter/Footer.js
import React from "react";
import "./PagesFooter.css";
import sent from '../images/right.png';

const Footer = () => {
  return (
    <div className="pagesFooter">
      <div className="pagesFooterSection1">
        <p className="pagesFooterSection1UpperSmallText"> STAY UP TO DATE</p>
        <div className="pagesFooterSection1MiddleTextDiv">
          <h1 className="pagesFooterSection1MiddleText">
            get our newsletter
          </h1>
        </div>
        <div className="pagesFooterSection1EmailSent">
          <input className="pagesFooterSection1EmailSentFiled" placeholder="Your email"></input>
          <button className="pagesFooterSection1EmailSentButton"> <img src={sent} className="sentbuttonsicon" /> </button>
        </div>
      </div>

      <div className="pagesFooterSection2">
        <h1 className="pagesFooterSection2logo">V</h1>
      </div>
      <div className="pagesFooterSection3">
        <p className="pagesFooterSection3UpperSmallText">GET IN TOUCH</p>
        <h1 className="pagesFooterSection3OurEmail">email@gmail.com</h1>
        <h1 className="pagesFooterSection3Number">+599 000000000</h1>
      </div>
    </div>
  );
};

export default Footer;
