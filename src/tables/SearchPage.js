import { useState, useEffect } from "react";
import axios from "axios";
import "./SearchPage.css";
import GlowingCursor from "../goloweffect/GlowingCursor";

function SearchPage() {
  const [activeButton, setActiveButton] = useState(null);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [popupImage, setPopupImage] = useState(null);

  const [popupVideo, setPopupVideo] = useState(null);

  useEffect(() => {
    
    axios
      .get("https://voxelweb.onrender.com/products")
      .then((response) => {
        const modifiedItems = response.data.map((item) => {
          if (item.producttipe.toLowerCase() === "render" && item.url.includes("drive.google.com")) {
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

        modifiedItems.sort((a, b) => b.id - a.id);

        setItems(modifiedItems);
        setFilteredItems(modifiedItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const openImagePopup = (imageUrl) => {
    setPopupImage(imageUrl);
    document.body.style.overflow = "hidden";
  };
  
  const closeImagePopup = () => {
    setPopupImage(null);
    document.body.style.overflow = "auto";
  };
  
  const filterOrder = ["render", "architecture", "360 tour", "animation"];

  const handleClick = (label) => {
    const selectedFilter = label.toLowerCase();
    if (selectedFilter === activeButton) {
      setActiveButton(null);
      setFilteredItems(items);
    } else {
      setActiveButton(selectedFilter);
      setFilteredItems(items.filter((item) => item.producttipe.toLowerCase() === selectedFilter));
    }
  };

  const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const openPopup = (videoUrl) => {
    setPopupVideo(videoUrl);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupVideo(null);
    document.body.style.overflow = "auto";
  };

  const groupedItems = filteredItems.reduce((acc, item) => {
    const productType = item.producttipe.toLowerCase();
    if (!acc[productType]) {
      acc[productType] = [];
    }
    acc[productType].push(item);
    return acc;
  }, {});

  return (
    <div className="SearchPage">
      <GlowingCursor />
      <div className="SearchPageFilter">
        {filterOrder.map((label, index) => {
          const isActive = activeButton === label;
          return (
            <button
              key={index}
              className={`SearchPageFilterButton ${isActive ? "active" : ""}`}
              onClick={() => handleClick(label)}
            >
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </button>
          );
        })}
      </div>

      <div className="SearchPageItems">
        <div className="SearchPageItemsContainer">
          {filterOrder.map((category, index) => {
            if (!groupedItems[category]) return null;
            const isActiveCategory = activeButton === null || activeButton === category;
            return (
              <div
                key={index}
                className={`SearchPageCategory ${
                  isActiveCategory ? (activeButton === category ? "full-width" : "side-by-side") : "hidden"
                }`}
              >
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <div className={`SearchPageItemGrid ${activeButton === null ? "vertical" : ""}`}>
                  {groupedItems[category].map((item) => {
                    const videoId = extractVideoId(item.url);
                    return (
                      <div key={item.id} className="SearchPageItem">
                        {category === "render" ? (
                          <img
                          src={item.url}
                          alt="Render Image"
                          width="100%"
                          height="300"
                          className="renderitem"
                          onClick={() => openImagePopup(item.url)}
                          style={{ cursor: "pointer" }}
                        />
                        
                        ) : category === "architecture" || category === "animation" ? (
                          videoId ? (
                            <div
                              className="video-thumbnail"
                              onClick={() => openPopup(`https://www.youtube.com/embed/${videoId}`)}
                              style={{
                                backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
                              }}
                            >
                              <span className="play-button">▶</span>
                            </div>
                          ) : null
                        ) : category === "360 tour" ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <div className="tour-thumbnail">
                              <img src={item.toursimageurl} alt="360 Tour" />
                              <span className="tour-button">🌐 {item.productsname}</span>
                            </div>
                          </a>
                        ) : (
                          <img src={item.url} alt="Product Image" />
                        )}
                        <p>{item.productsname}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {popupVideo && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={closePopup}>✖</button>
            <iframe
              width="800"
              height="450"
              src={popupVideo}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      {popupImage && (
        <div className="popup-overlay" onClick={closeImagePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={closeImagePopup}>✖</button>
            <img src={popupImage} alt="Full View" style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: "8px" }} />
          </div>
        </div>
      )}

    </div>
  );
}

export default SearchPage;