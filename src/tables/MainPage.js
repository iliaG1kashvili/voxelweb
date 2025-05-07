import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import ScrollAnimation from "../scroldownanimation/ScrollAnimation";
import section1Img from "../images/imageforfirstmainpage.jpg";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/11.png";
import godownarrow from "../images/arrow-down.png";
import GlowingCursor from "../goloweffect/GlowingCursor";
import { useLanguage } from "../swap/LanguageContext";
import content from "../swap/lang.json";
import axios from 'axios';

  function MainPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isPaused, setIsPaused] = useState(false);


 
  
  // Fetch images and process them
  useEffect(() => {
    axios
      .get("https://voxelweb.onrender.com/products/render")
      .then((response) => {
        // Modify items if necessary, e.g., handling Google Drive links
        const modifiedItems = response.data
        .filter((item) => item.producttipe?.toLowerCase() === "render")
        .map((item) => {
          if (item.url.includes("drive.google.com")) {
            const fileIdMatch = item.url.match(/[-\w]{25,}/);
            if (fileIdMatch) {
              return {
                ...item,
                url: `https://drive.google.com/thumbnail?id=${fileIdMatch[0]}`,
              };
            }
          }
          return item;
        });
      

        // Extract and set the URLs of the images
        const imageUrls = modifiedItems.map(item => item.url);
        setImages(imageUrls);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  // Function to determine the class name based on the index
  const getClassName = (index) => {
    if (index === currentIndex) return "current";
    if (index === (currentIndex - 1 + images.length) % images.length) return "prev";
    if (index === (currentIndex + 1) % images.length) return "next";
    return ""; // hide all others
  };
  
  
  
  

  useEffect(() => {
    if (images.length === 0 || isPaused) return;
  
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
  
    return () => clearInterval(interval);
  }, [images, isPaused]);
  
  

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const x = (mouseX / width - 0.5) * 50;
      const y = (mouseY / height - 0.5) * -50;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight * 1.4, behavior: "smooth" });
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
          >x
              <button className="MainPAgesection1ImageAndTextButton"
              onClick={() => handleNavigate("/our-catalog")}>
                Discover What We Do
              </button>
          </div>
        </div>
        <button onClick={handleScroll} className="godownbuttonfromfirsttosecond"><img className="godownarrowimage" src={godownarrow}/></button>




        {/* Remaining sections stay the same */}
        <div className="MainPAgesection2">
          <div className="MainPAgesection2conteiner">
            <p className="MainPAgesection2Text1">{content[language].mainPAgesection2Text1}</p>

            <div className="MainPAgesection2Row1">
              <p className="MainPAgesection2Text2">{content[language].MainPAgesection2Text2}</p>
              <p className="MainPAgesection2Text3">{content[language].MainPAgesection2Text3}</p>
            </div>
            <div className="MainPAgesection2Row2">
              <p className="MainPAgesection2Text4">{content[language].MainPAgesection2Text4}</p>
              <p className="MainPAgesection2Text5">{content[language].MainPAgesection2Text5}</p>
              <p className="MainPAgesection2Text6">{content[language].MainPAgesection2Text6}</p>
            </div>
            <div className="MainPAgesection2Row3">
              <p className="MainPAgesection2Text7">{content[language].MainPAgesection2Text7}</p>
              <p className="MainPAgesection2Text8">{content[language].MainPAgesection2Text8}</p>
            </div>
          </div>
        </div>





        {/* section3 */}
        <div
  className="MainPAgesection3"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  <div className="carousel-container">
    {images.map((image, index) => (
      <img
        src={image}
        alt={`carousel-${index}`}
        loading="lazy"
        className={`carousel-image ${getClassName(index)}`}
        key={index}
        onClick={() => handleNavigate("/our-catalog")}
      />
    ))}
  </div>
</div>






        
        {/* section4 */}
        <div className="MainPAgesection4">
          <h2 className="MainPAgesection4Headertext">{content[language].MainPAgesection4Headertext}</h2>

          <div className="MainPAgesection4conteiner1">
            <img className="MainPAgesection4conteiner1image1" src={img1} alt="" />
            <div className="MainPAgesection4conteiner1Row1">
              <h4 className="MainPAgesection4conteiner1HeaderText">Render</h4>
              <p className="MainPAgesection4conteiner1InformationalText">
                {content[language].MainPAgesection4conteiner1InformationalText}
              </p>
            </div>
          </div>

          <div className="MainPAgesection4conteiner2">
            <img className="MainPAgesection4conteiner2image1" src={img2} alt="" />
            <div className="MainPAgesection4conteiner2Row1">
              <h4 className="MainPAgesection4conteiner2HeaderText">Animation</h4>
              <p className="MainPAgesection4conteiner2InformationalText">
                {content[language].MainPAgesection4conteiner2InformationalText}
              </p>
            </div>
          </div>

          <div className="MainPAgesection4conteiner3">
            <img className="MainPAgesection4conteiner3image1" src={img3} alt="" />
            <div className="MainPAgesection4conteiner3Row1">
              <h4 className="MainPAgesection4conteiner3HeaderText">360 tour</h4>
              <p className="MainPAgesection4conteiner3InformationalText">
                {content[language].MainPAgesection4conteiner3InformationalText}
              </p>
            </div>
          </div>
        </div>

        <div className="MainPAgesection5">
          <div className="MainPAgesection5Section1">
            <h1 className="MainPAgesection5Section1header1">Render</h1>
            <div className="MainPAgesection5Section1Items">
              <img src={img1} className="MainPAgesection5Section1ItemsImg" />
              <p className="MainPAgesection5Section1ItemsText"></p>
            </div>
          </div>
          <div className="MainPAgesection5Section2">
            <h1 className="MainPAgesection5Section2header1">Architecture</h1>
            <div className="MainPAgesection5Section2Items">
              <img src={img2} className="MainPAgesection5Section1ItemsImg" />
              <p className="MainPAgesection5Section1ItemsText"></p>
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
            <p className="MainPAgesection5Section1ItemsText"></p>
            </div>
          </div>
        </div>






      <div className='MainPAgesection6'>
        <h1 className='MainPAgesection6Text1'>{content[language].MainPAgesection6Text1}</h1>
        <h1 className='MainPAgesection6Text2'>{content[language].MainPAgesection6Text2}</h1>
        <h1 className='MainPAgesection6Text3'>{content[language].MainPAgesection6Text3}</h1>
      </div>
    </div>
    </div>
  );
}

export default MainPage;