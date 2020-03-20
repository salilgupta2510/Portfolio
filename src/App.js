import React from "react";
import Typical from "react-typical";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section id="home" className="main-home parallax-section">
        <div className="overlay"></div>
        <Particles className="background" params={styleParams} />
        <div className="name-container">
          <h2 className="name-heading">Hi, I'm Salil Gupta</h2>
          <div className="col-md-12 col-sm-12">
            <Typical
              className="name-heading"
              steps={[
                `I'm a User Interface Developer`,
                1000,
                `I develop Web & Mobile applications`,
                1000
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <div className="col-md-12 col-sm-12">
            <NavLink className="nav-link" exact to="/projects">
              Know More &gt;
            </NavLink>
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
      value: 100
    },
    size: {
      value: 5
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};
