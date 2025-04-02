import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import ScrollAnimation from "../scroldownanimation/ScrollAnimation";
import section1Img from "../images/MainPAgeSection1Img.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/11.png";
import GlowingCursor from "../goloweffect/GlowingCursor";

const images = [img1, img2, img3, img4, img5];

function MainPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const x = (mouseX / width - 0.5) * 50;
      const y = (mouseY / height - 0.5) * -50;
      setTilt({ x, y });
      setMousePos({ x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getClassName = (index) => {
    if (index === currentIndex) return "current";
    if (index === (currentIndex + images.length - 1) % images.length) return "prev";
    if (index === (currentIndex + 1) % images.length) return "next";
    return "";
  };
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="MainPage">
      <GlowingCursor />

      <div className="table-container">



        <div className="MainPAgesection1">
          <div
            className={`MainPAgesection1ImageAndText ${tilt.x !== 0 || tilt.y !== 0 ? "tilted" : ""}`}
            style={{
              backgroundImage: `url(${section1Img})`,
              transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,

            }}
          >
            <p className="MainPAgesection1ImageAndTextText1">Conversion</p>
            <div className="MainPAgesection1Row">
              <p className="MainPAgesection1ImageAndTextText2">Through</p>
              <button className="MainPAgesection1ImageAndTextButton"
              onClick={() => handleNavigate("/what-we-do")}>
                Discover What We Do
              </button>
            </div>
            <p className="MainPAgesection1ImageAndTextText3">Immersion</p>
          </div>
        </div>




        {/* Remaining sections stay the same */}
        <div className="MainPAgesection2">
          <div className="MainPAgesection2conteiner">
            <p className="MainPAgesection2Text1">Enjoy some of our best work</p>
            <div className="MainPAgesection2Row1">
              <p className="MainPAgesection2Text2">in immersive</p>
              <p className="MainPAgesection2Text3">web,</p>
            </div>
            <div className="MainPAgesection2Row2">
              <p className="MainPAgesection2Text4">augmented reality</p>
              <p className="MainPAgesection2Text5">and</p>
              <p className="MainPAgesection2Text6">virtual</p>
            </div>
            <div className="MainPAgesection2Row3">
              <p className="MainPAgesection2Text7">reality</p>
              <p className="MainPAgesection2Text8">experiences</p>
            </div>
          </div>
        </div>





        {/* section3 */}
        <div className="MainPAgesection3">
        <div className="carousel-container"> 
          {images.map((image, index) => (
            <img
              src={image}
              alt={`carousel-${index}`}
              className={`carousel-image ${getClassName(index)}`}
              key={index}
            />
          ))}
        </div>
      </div>





        
        {/* section4 */}
        <div className="MainPAgesection4">
          <h2 className="MainPAgesection4Headertext">FEATURED INSIGHTS</h2>

          <div className="MainPAgesection4conteiner1">
            <img className="MainPAgesection4conteiner1image1" src={img1} alt="" />
            <div className="MainPAgesection4conteiner1Row1">
              <h4 className="MainPAgesection4conteiner1HeaderText">Render</h4>
              <p className="MainPAgesection4conteiner1InformationalText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                malesuada quam eget felis vehicula luctus. Praesent ac consequat
                augue. Donec sed justo at odio pulvinar congue a et ligula. Nam at
                lorem lorem. Integer maximus libero vel tortor mollis, quis
                pretium ipsum efficitur. Sed tortor orci, consectetur in eros non,
                mattis faucibus orci.
              </p>
            </div>
          </div>

          <div className="MainPAgesection4conteiner2">
            <img className="MainPAgesection4conteiner2image1" src={img2} alt="" />
            <div className="MainPAgesection4conteiner2Row1">
              <h4 className="MainPAgesection4conteiner2HeaderText">Architecture</h4>
              <p className="MainPAgesection4conteiner2InformationalText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                malesuada quam eget felis vehicula luctus. Praesent ac consequat
                augue. Donec sed justo at odio pulvinar congue a et ligula. Nam at
                lorem lorem. Integer maximus libero vel tortor mollis, quis
                pretium ipsum efficitur. Sed tortor orci, consectetur in eros non,
                mattis faucibus orci.
              </p>
            </div>
          </div>

          <div className="MainPAgesection4conteiner3">
            <img className="MainPAgesection4conteiner3image1" src={img3} alt="" />
            <div className="MainPAgesection4conteiner3Row1">
              <h4 className="MainPAgesection4conteiner3HeaderText">360 tour</h4>
              <p className="MainPAgesection4conteiner3InformationalText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                malesuada quam eget felis vehicula luctus. Praesent ac consequat
                augue. Donec sed justo at odio pulvinar congue a et ligula. Nam at
                lorem lorem. Integer maximus libero vel tortor mollis, quis
                pretium ipsum efficitur. Sed tortor orci, consectetur in eros non,
                mattis faucibus orci.
              </p>
            </div>
          </div>
        </div>

        <div className="MainPAgesection5">
          <div className="MainPAgesection5Section1">
            <h1 className="MainPAgesection5Section1header1">Render</h1>
            <div className="MainPAgesection5Section1Items">
              <img src={img1} className="MainPAgesection5Section1ItemsImg" />
              <p className="MainPAgesection5Section1ItemsText">Name</p>
            </div>
          </div>
          <div className="MainPAgesection5Section2">
            <h1 className="MainPAgesection5Section2header1">Architecture</h1>
            <div className="MainPAgesection5Section2Items">
              <img src={img2} className="MainPAgesection5Section1ItemsImg" />
              <p className="MainPAgesection5Section1ItemsText">Name</p>
            </div>
            <button 
              className="MainPAgesection5SeeMoreButton" 
              onClick={() => handleNavigate("/our-catalog")}
            >
              See more
            </button>
          </div>
          <div className="MainPAgesection5Section3">
            <h1 className="MainPAgesection5Section3header1">360 tour</h1>
            <div className="MainPAgesection5Section3Items">
            <img src={img3} className="MainPAgesection5Section1ItemsImg"/>
            <p className="MainPAgesection5Section1ItemsText">Name</p>
            </div>
          </div>
        </div>






      <div className='MainPAgesection6'>
        <h1 className='MainPAgesection6Text1'>let`s make</h1>
        <h1 className='MainPAgesection6Text2'>great work</h1>
        <h1 className='MainPAgesection6Text3'>together</h1>
      </div>
    </div>
    </div>
  );
}

export default MainPage;