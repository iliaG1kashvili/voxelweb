import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PageHeader.css";

function PageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  let lastScrollY = window.scrollY;
  const navigate = useNavigate();
  const location = useLocation(); // Get current page location

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

  return (
    <div className="PageHeader">
      <h1
        className="headersMainText"
        onClick={() => {
          setMenuOpen(!menuOpen);
          handleNavigate("/");
        }}
      >
        VOXEL
      </h1>
      <div className="right-container">
        {/* Hide "Get in Touch" button when on /PageHeadersPage */}
        {location.pathname !== "/PageHeadersPage" && (
          <button
            className={`getInTachButton ${showButton ? "" : "hidden"}`}
            onClick={() => handleNavigate("/contact")}
          >
            Get in touch
          </button>
        )}

        {/* Show "X" button when on /PageHeadersPage, otherwise show the hamburger menu */}
        {location.pathname === "/PageHeadersPage" ? (
          <button
            className="close-button"
            onClick={() => navigate(-1)} // Go back to previous page
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
