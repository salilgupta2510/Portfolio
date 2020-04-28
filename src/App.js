import React from "react";
import Typical from "react-typical";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";
import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import "./App.css";

function App() {
  const shareUrl = "https://salilgupta2510.github.io/Portfolio";
  const title = "SalilGupta";
  console.log(window.location)
  return (
    <div className="App">
      <section id="home" className="main-home parallax-section">
        <div className="overlay"></div>
        <Particles className="backgroundApp" params={styleParams} />
        <div className="name-container">
          <h2 className="name-heading">Hi, I'm Salil Gupta</h2>
          <div className="col-md-12 col-sm-12">
            <Typical
              className="name-heading"
              steps={[
                `I'm a Front End Developer`,
                1000,
                `I develop Web & Mobile applications`,
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
        </div>
        <div className={"additional"}>
          <div className="col-md-12 col-sm-12">
            <NavLink className="nav-link" exact to="/Projects">
              Know More &gt;
            </NavLink>
          </div>
          <div className="share-button-container">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button added-style-share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button added-style-share-button"
            >
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button added-style-share-button"
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <EmailShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button added-style-share-button"
            >
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

const styleParams = {
  particles: {
    number: {
      value: 100,
    },
    size: {
      value: 5,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};
