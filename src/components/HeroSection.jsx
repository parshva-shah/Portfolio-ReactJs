import React from 'react';
// import '../App.css';
import './HeroSection.css';
import './bootstrap.min.css'
import link from './assets/002-linkedin.png'
import git from './assets/001-github.png'
import insta from './assets/001-instagram.png'
import me from './assets/3.png'
import Footer from './Footer';

function HeroSection() {
  return (

    <div className="App">
      <div className="row">

        <div className="col-12 col-md-12 col-lg-5 col-xl-5 LeftDiv">
          {/* <div style={{ height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.1)", position: "absolute", top: 0, left: 0 }}></div> */}
        </div>
        <div className="col-12 col-md-12 col-lg-7 col-xl-7 RightDiv" style={{ backgroundImage: `url()`, backgroundRepeat: "repeat", color: "#1E3512", position: "relative" }}>

          <div className="introdiv">
            <div className="hello">
              Hello. I am
            </div>
            <div className="intro">
              Parshva Shah.
            </div>
            <div className="hello1">
              <p>I build things <br />for phone and web.</p>
            </div>
          </div>
          <div className="socmed">
            <a href="https://www.linkedin.com/in/parshvashah0519/" target="_blank"><img src={link} alt="LinkedIn Icon" /></a>
            <a href="https://github.com/parshva-shah?tab=repositories" target="_blank"><img src={git} alt="Github Icon" /></a>
            <a href="https://www.instagram.com/parshvacodes/" target="_blank"><img src={insta} alt="Instagram Icon" /></a>

          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-5 col-xl-5 CenterDiv">

        </div>
      </div>
      <Footer />
    </div>


  );
}

export default HeroSection;
