import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageHeadersPage.css";
import facebook from '../images/facebook-logo.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';



function PageHeadersPage() {
  const menuItems = ["our catalog", "what we do", "contact"];
  const navigate = useNavigate(); // Initialize navigation

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <div className="PageHeadersPage">
      <div className="PageHeadersPageSection1seperation1"></div>
      <div className="PageHeadersPageSection1">

        <div className='PageHeadersPageSection1seperation'></div>
        <div className="PageHeadersPageSection1icon">
          <a href='https://www.facebook.com/geovoxel/'>
            <img src={facebook} className="PageHeadersPageSection1iconimg1" />
          </a>
          <a href='https://www.instagram.com/_voxel__/'>
            <img src={instagram} className="PageHeadersPageSection1iconimg2" />
          </a>
          <a>
            <img src={linkedin} className="PageHeadersPageSection1iconimg3" />
          </a>
          <a href='https://www.youtube.com/watch?v=Vi-537JX4FA&list=PLKInXRd0zUgl8lfVo-GV2RsyMom_vRCOt&index=3'>
            <img src={youtube}  className="PageHeadersPageSection1iconimg4"/>
          </a>
        </div>
        <p className="PageHeadersPageSection1Text1">GET IN TOUCH</p>
        <h1 className="PageHeadersPageSection1Text2">voxel@gmail.com</h1>
        <h1 className="PageHeadersPageSection1Text3">+995-000-000-000</h1>
      </div>
      <div className="PageHeadersPageSection2">
        {menuItems.map((text, index) => (
          <button 
            key={index} 
            className="PageHeadersPageSection2Text1"
            onClick={() => handleNavigate(`/${text.replace(/\s+/g, "-").toLowerCase()}`)}
          >
            {text.split("").map((letter, i) => (
              <span key={i} className="nav-a-letter">{letter}</span>
            ))}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PageHeadersPage;
