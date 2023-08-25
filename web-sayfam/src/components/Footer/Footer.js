import React from "react";
import "./Footer.css";
import image3 from "../images/image3.png";
import { useColorMode } from "../../Context/DarkMode";
import { useLanguage } from "../../Context/LanguageContext";
import Data from "../../Api/Data";
import { BrowserRouter as Router, Link, } from 'react-router-dom';

function Footer() {
    const { darkMode } = useColorMode();
    const { currentLanguage } = useLanguage();

    return (
        <Router>
            <div className={`footer-container ${darkMode ? 'dark' : 'light'}`}>
                <div className={`footer-general-container ${darkMode ? 'dark' : 'light'}`}>
                    <div className={`footer-first ${darkMode ? 'dark' : 'light'}`}>
                        <p className={`footer-text-container ${darkMode ? 'dark' : 'light'}`}>{Data[currentLanguage].FooterTitle}<br className="space" />{Data[currentLanguage].FooterTitle1}</p>
                        <div className={`footer-mail ${darkMode ? 'dark' : 'light'}`}>
                            <img src={image3} alt="image3" style={{ width: '20px', height: "21px" }} />
                            <Link to="mailto:kubilayozdemir95@gmail.com" target='_blank'>
                                <p className={`mail-text ${darkMode ? 'dark' : 'light'}`}>kubilayozdemir95@gmail.com</p>
                            </Link>
                        </div>
                    </div>
                    <div className={`footer-second ${darkMode ? 'dark' : 'light'}`}>
                        <div className={`personal-blog ${darkMode ? 'dark' : 'light'}`}><p className={darkMode ? 'dark-text-blog' : 'light-text'}>{Data[currentLanguage].Blog}</p></div>
                        <Link to="https://github.com/Kubilay-web" target='_blank'>
                            <div className={`footer-github ${darkMode ? 'dark' : 'light'}`}><p className={darkMode ? 'dark-text-github' : 'light-text'}>Github</p></div>
                        </Link>
                        <Link to="https://www.linkedin.com/in/kubilay-ozdemir-8a2773177/" target='_blank'>
                            <div className={`footer-linkedin ${darkMode ? 'dark' : 'light'}`}><p className={darkMode ? 'dark-text-linkedin' : 'light-text'}>Linkedin</p></div>
                        </Link>
                    </div>
                </div>
            </div>
        </Router>
    )
};

export default Footer;
