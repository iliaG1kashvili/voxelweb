import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../swap/LanguageContext"; // assuming context is set up
import "./PageHeader.css";
import headerlogo from "../images/headerlogo1.png";

function PageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const { language, switchLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleLanguage = () => {
    switchLanguage(
      language === "en" ? "ka" :
      language === "ka" ? "tr" :
      "en"
    );
  };
  

  return (
    <div className="PageHeader">
      <h1
        className="headersMainText"
        onClick={() => {
          setMenuOpen(!menuOpen);
          handleNavigate("/");
        }}
        
      >
        <h3 className="creatinglogo1">V</h3>
        <h3>oxel</h3>
      </h1>

      <div className="right-container">
        {/* Language Toggle Button - placed before "Get in touch" */}
        {location.pathname !== "/PageHeadersPage" && (
          <button
            className={`langToggleButton ${showButton ? "" : "hidden"}`}
            onClick={toggleLanguage}
          >
            { language === "en" ? "🇹🇷 US 🇬🇪" : language === "ka" ? "🇺🇸 GE 🇹🇷" : "🇬🇪 TR 🇺🇸"}
          </button>
        )}

        {/* Get in Touch Button */}
        {location.pathname !== "/PageHeadersPage" && (
          <button
            className={`getInTachButton ${showButton ? "" : "hidden"}`}
            onClick={() => handleNavigate("/contact")}
          >
            Get in touch
          </button>
        )}

        {/* Hamburger or Close Button */}
        {location.pathname === "/PageHeadersPage" ? (
          <button
            className="close-button"
            onClick={() => navigate(-1)}
          >
            ✖
          </button>
        ) : (
          <button
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
              handleNavigate("/PageHeadersPage");
            }}
          >
            ☰
          </button>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
