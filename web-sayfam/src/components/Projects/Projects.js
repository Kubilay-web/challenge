import React from "react";
import "./Projects.css";
// import image2 from "../images/image2.png";
import shopping from "../images/shopping.png";
// import image4 from "../images/image4.png";
import film from "../images/film.png";
// import image5 from "../images/image5.png";
import calculator from "../images/calculator.png";
import { useColorMode } from "../../Context/DarkMode";
import { BrowserRouter as Router, Link, } from 'react-router-dom';
import { useLanguage } from "../../Context/LanguageContext";
import Data from "../../Api/Data";


function Projects({ projectsRef }) {
    const { darkMode } = useColorMode();
    const { currentLanguage } = useLanguage();

    return (
        <Router>
            <div ref={projectsRef} className={`project-general-container ${darkMode ? 'dark' : 'light'}`}>
                <div className={`projects-container ${darkMode ? 'dark' : 'light'}`}>
                    <h1 className={darkMode ? 'dark-text' : 'light-text'}>{Data[currentLanguage].Projects}</h1>
                    <div className={`project-general ${darkMode ? 'dark' : 'light'}`}>
                        <div className={`project-first ${darkMode ? 'dark' : 'light'}`}>
                            <img src={shopping} alt="shopping" style={{ width: '300px', height: "180px" }} />
                            <h2 className={darkMode ? 'dark-text' : 'light-text'}>{Data[currentLanguage].Project1}</h2>
                            <p className={darkMode ? 'dark-text' : 'light-text'}>{Data[currentLanguage].Project1Text}</p>
                            <div className={`project-tags ${darkMode ? 'dark' : 'light'}`}>
                                <div className={`project-react ${darkMode ? 'dark' : 'light'}`}><p>react</p></div>
                                <div className={`project-axios ${darkMode ? 'dark' : 'light'}`}><p>Context API</p></div>
                            </div>
                            <div className={`projects-link ${darkMode ? 'dark' : 'light'}`}>
                                <Link to="https://github.com/Kubilay-web/fsweb-s11g1-shopping-cart" target='_blank'>
                                    <p>Github</p>
                                </Link>
                                <Link to="https://fsweb-s11g1-shopping-cart-flax.vercel.app/" target='_blank'>
                                    <p>{Data[currentLanguage].View}</p>
                                </Link>
                            </div>
                        </div>
                        <div className={`project-first ${darkMode ? 'dark' : 'light'}`}>
                            <img src={film} alt="film" style={{ width: '300px', height: "180px" }} />
                            <h2 className={darkMode ? 'dark-text' : 'light-text'}>{Data[currentLanguage].Project2}</h2>
                            <p className={darkMode ? 'dark-text' : 'light-text'}>
                            {Data[currentLanguage].Project2Text}
                            </p>
                            <div className={`project-tags ${darkMode ? 'dark' : 'light'}`}>
                                <div className={`project-react ${darkMode ? 'dark' : 'light'}`}><p>react</p></div>
                                <div className={`project-redux ${darkMode ? 'dark' : 'light'}`}><p>redux</p></div>
                            </div>
                            <div className={`projects-link ${darkMode ? 'dark' : 'light'}`}>
                                <Link to="https://github.com/Kubilay-web/fsweb-s10g3-redux-watchlist" target='_blank'>
                                    <p>Github</p>
                                </Link>
                                <Link to="https://redux-watchlist-beta.vercel.app/" target='_blank'>
                                    <p>{Data[currentLanguage].View}</p>
                                </Link>
                            </div>
                        </div>
                        <div className={`project-first ${darkMode ? 'dark' : 'light'}`}>
                            <img src={calculator} alt="calculator" style={{ width: '300px', height: "180px" }} />
                            <h2 className={darkMode ? 'dark-text' : 'light-text'}>{Data[currentLanguage].Project3}</h2>
                            <p className={darkMode ? 'dark-text' : 'light-text'}>{Data[currentLanguage].Project3Text}</p>
                            <div className={`project-tags ${darkMode ? 'dark' : 'light'}`}>
                                <div className={`project-react ${darkMode ? 'dark' : 'light'}`}><p>react</p></div>
                                <div className={`project-redux ${darkMode ? 'dark' : 'light'}`}><p>reducer</p></div>
                            </div>
                            <div className={`projects-link ${darkMode ? 'dark' : 'light'}`}>
                                <Link to="https://github.com/Kubilay-web/fsweb-s10g1-reducer-calculator" target='_blank'>
                                    <p>Github</p>
                                </Link>
                                <Link to="https://reducer-calculator-three.vercel.app/" target='_blank'>
                                    <p>{Data[currentLanguage].View}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
};

export default Projects;
