import React, { useRef,useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { ColorModeProvider } from './Context/DarkMode';
import { LanguageProvider } from './Context/LanguageContext';
import { useColorMode } from './Context/DarkMode';


function AppContent() {
  const { darkMode } = useColorMode();
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const [value, setValue] = useState(0);

  
  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <Header skillsRef={skillsRef} projectsRef={projectsRef} />
      <Section1 skillsRef={skillsRef} />
      <Profile />
      <Projects projectsRef={projectsRef} />
      <Footer />
    </div>
  );
}


function App() {
  return (
    <ColorModeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ColorModeProvider>
  );
}



export default App;
