import React from 'react';
import Typical from 'react-typical';
import { Button } from 'react-bootstrap';
import Particles from 'react-particles-js';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="home" className="main-home parallax-section">
        <div className="overlay"></div>
        <Particles
          className="background"
          params={styleParams} />
        <div className="name-container">
          <h2 className="name-heading">Hi, I'm Salil Gupta</h2>
          <div class="col-md-12 col-sm-12">
            <Typical
              className="name-heading"
              steps={[`I'm a User Interface Developer`, 1000, `I develop Web & Mobile applications`, 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <div class="col-md-12 col-sm-12">
            <Button variant="outline-secondary">Know More &gt;</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

const styleParams = {
  "particles": {
    "number": {
      "value": 100
    },
    "size": {
      "value": 5
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}