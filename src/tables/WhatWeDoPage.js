import './WhatWeDoPage.css';
import GlowingCursor from '../goloweffect/GlowingCursor';
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/11.png";
import img6 from '../images/tecno.png'

function WhatWeDoPage() {
  return (
    <div className="WhatWeDoPage">
      <GlowingCursor />
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
          <div className="MainPAgesection4conteiner2">
            <img className="MainPAgesection4conteiner2image1" src={img6} alt="" />
            <div className="MainPAgesection4conteiner2Row1">
              <h4 className="MainPAgesection4conteiner2HeaderText">animation</h4>
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
        </div>
    </div>
  );
}

export default WhatWeDoPage;
