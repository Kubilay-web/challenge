import React from "react";
import line4 from '../images/line4.png';
import "./Profile.css";
import { useColorMode } from "../../Context/DarkMode";
import { useLanguage } from "../../Context/LanguageContext";
import Data from '../../Api/Data';

function Profile() {
    const { darkMode } = useColorMode();
    const { currentLanguage } = useLanguage();

    return (
        <div className={`profile-general-container ${darkMode ? 'dark' : 'light'}`}>
            <div className={`profile-container ${darkMode ? 'dark' : 'light'}`}>
                <div className={`profile-header ${darkMode ? 'dark' : 'light'}`}>
                    <h1>{Data[currentLanguage].profile}</h1>
                </div>
                <div className={`profile-general ${darkMode ? 'dark' : 'light'}`}>
                    <div className={`profile-first ${darkMode ? 'dark' : 'light'}`}>
                        <h2>{Data[currentLanguage].profile}</h2>
                        <div className="profile-info">
                            <div className={`profile-date ${darkMode ? 'dark' : 'light'}`}>
                                <div className="date">
                                    <h3>{Data[currentLanguage].BirthDate}</h3>
                                    <p>02.09.1995</p>
                                </div>
                                <div className="city">
                                    <h3>{Data[currentLanguage].City}</h3>
                                    <p>İstanbul</p>
                                </div>
                                <div className="education">
                                    <h3>{Data[currentLanguage].Education}</h3>
                                    <p>{Data[currentLanguage].University}<br />{Data[currentLanguage].University1}</p>
                                </div>
                                <div className="role">
                                    <h3>{Data[currentLanguage].Role}</h3>
                                    <p>Frontend,UI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`profile-second ${darkMode ? 'dark' : 'light'}`}>
                        <h2>{Data[currentLanguage].AboutHead}</h2>
                        <p>{Data[currentLanguage].About}</p>
                    </div>
                </div>
                <div className={`profile-line ${darkMode ? 'dark' : 'light'}`}>
                    <img src={line4} alt="line4" style={{ width: '1140px', height: "2px" }} />
                </div>
            </div>
        </div>
    )
}

export default Profile;
