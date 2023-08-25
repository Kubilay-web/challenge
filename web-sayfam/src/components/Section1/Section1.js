import React from 'react';
import "./Section1.css";
import line3 from '../images/line3.png';
import { useColorMode } from "../../Context/DarkMode";
import { useLanguage } from "../../Context/LanguageContext";
import Data from '../../Api/Data';

function Section1({skillsRef}) {
  const { darkMode } = useColorMode();
  const { currentLanguage } = useLanguage();

  return (
    <div  ref={skillsRef}  className={`skills-general-container ${darkMode ? 'dark' : 'light'}`}>
      <div className={`skills-container ${darkMode ? 'dark' : 'light'}`}>
        <div className={`skills-header ${darkMode ? 'dark' : 'light'}`}>
          <h1>{Data[currentLanguage].skills}</h1>
        </div>
        <div className={`skills-general ${darkMode ? 'dark' : 'light'}`}>
          <div className={`skills-first ${darkMode ? 'dark' : 'light'}`}>
            <h2>{currentLanguage === 'en' ? 'JavaScript' : 'JavaScript'}</h2>
            <p>{Data[currentLanguage].JavaScript}</p>
          </div>
          <div className={`skills-second ${darkMode ? 'dark' : 'light'}`}>
            <h2>{currentLanguage === 'en' ? 'React.Js' : 'React.Js'}</h2>
            <p>{Data[currentLanguage].React}</p>
          </div>
          <div className={`skills-third ${darkMode ? 'dark' : 'light'}`}>
            <h2>{currentLanguage === 'en' ? 'Java' : 'Java'}</h2>
            <p>{Data[currentLanguage].Java}</p>
          </div>
        </div>
        <div className={`skills-line ${darkMode ? 'dark' : 'light'}`}>
          <img src={line3} alt="line3" style={{ width: '1135px', height: "2px" }} />
        </div>
      </div>
    </div>
  );
}

export default Section1;
