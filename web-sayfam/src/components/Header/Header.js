import React, { useRef, useState } from 'react';
import "./Header.css";
import line2 from '../images/line2.png';
import profile from "../images/profile.png";
import { useColorMode } from "../../Context/DarkMode";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from "../../Context/LanguageContext";
import Data from '../../Api/Data';
import { BrowserRouter as Router, Link, } from 'react-router-dom';





function Header({ skillsRef, projectsRef }) {
  const { darkMode, toggleDarkMode } = useColorMode();
  const { currentLanguage, toggleLanguage } = useLanguage();

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <Router>
      
        <div className={`mode-container ${darkMode ? 'dark' : 'light'}`}>
          <div className="general-container">
            <div onClick={toggleDarkMode} className="switch-mode-container">
              <div className="ellipse-container">
                <div className={`switch-mode-container ${isOn ? 'on' : ''}`} onClick={toggleSwitch}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                    <ellipse className={`ellipse ${isOn ? 'on' : ''}`} cx="7.5" cy="8" rx="7.5" ry="8" fill="#FFE86E"></ellipse>
                  </svg>
                </div>
              </div>
            </div>
            <div className={`switch-text-container ${darkMode ? 'dark' : 'light'}`}>
              <p>{darkMode ? 'LIGHT MODE' : 'DARK MODE'}</p>
            </div>
            <div className={`line ${darkMode ? 'dark' : 'light'}`}>|</div>
          </div>
          <div onClick={toggleLanguage} className={`switch-language-container ${darkMode ? 'dark' : 'light'}`}>
            <p><span className={`language ${darkMode ? 'dark' : 'light'}`}>{currentLanguage === 'en' ? 'TÜRKÇE' : 'İNGİLİZCE'}'</span>ye geç</p>
          </div>
        </div>
        <div className="header-container">
          <div className={`header-logo-container ${darkMode ? 'dark' : 'light'}`}>
            <p>K</p>
          </div>
          <div className="header-nav-list">
            <ul className="nav-list">
              <li onClick={scrollToSkills}>{Data[currentLanguage].skills}</li>
              <li onClick={scrollToProjects} >{Data[currentLanguage].projects}</li>
              <li className={`hire ${darkMode ? 'dark' : 'light'}`}>{Data[currentLanguage].hire}</li>
            </ul>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-text-container">
            <div className={`hero-image-name ${darkMode ? 'dark' : 'light'}`}>
              <img src={line2} alt="line2" style={{ width: '102px', height: "1px" }} />
              <p>Kubilay Özdemir</p>
            </div>
            <div className={`hero-creative-text ${darkMode ? 'dark' : 'light'}`}>
              <p>
                {currentLanguage === 'en' ? 'Creative thinker' : 'Yaratıcı düşünür'}<br />
                {currentLanguage === 'en' ? 'Minimalism lover' : 'Minimalizm aşığı'}
              </p>
            </div>
            <div className={`hero-sub-text ${darkMode ? 'dark' : 'light'}`}>
              <p>
                {Data[currentLanguage].hireDescription}<br className='break' />
                {Data[currentLanguage].hireDescription1}<br className='break' />
                {Data[currentLanguage].hireDescription2}<br className='break' />
              </p>
            </div>
            <div className="hero-button">
              <div className={`hero-hire ${darkMode ? 'dark' : 'light'}`}>
                <p>{Data[currentLanguage].hire}</p>
              </div>
              <Link to="https://github.com/Kubilay-web?tab=repositories" target='_blank'>
                <div className={`hero-github ${darkMode ? 'dark' : 'light'}`}>
                  <img src={darkMode ? require('../images/github-dark.png') : require('../images/github.png')} alt="image1" style={{ width: '26px', height: "28px" }} />
                  <p>Github</p>
                </div>
              </Link>
              <Link to="https://www.linkedin.com/in/kubilay-ozdemir-8a2773177/" target='_blank'>
                <div className={`hero-linkedin ${darkMode ? 'dark' : 'light'}`}>
                  <img src={darkMode ? require('../images/linkedin-dark.png') : require('../images/linkedin.png')} alt="LinkedIn" style={{ width: '24px', height: "26px" }} />
                  <p>LinkedIn</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            <img src={profile} alt="profile" style={{ width: '478px', height: "376px" }} />
          </div>
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
  );
}

export default Header;

