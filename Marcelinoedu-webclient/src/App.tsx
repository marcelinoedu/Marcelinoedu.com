import { useState, useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/Footer"
import About from './views/About';
import Contact from './views/Contact';
import Hi from "./views/HiComponent";
import "./assets/style/App.css";
import "./assets/style/AppDark.css";

function App() {
  const redirectToHi = () => <Navigate to="/hi" replace />;
  const [lightTheme, setLightTheme] = useState(true);
  useEffect(() => {
    if (lightTheme) {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }, [lightTheme]);
  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };
  const location = window.location.pathname;

  const [HiActive, setHiActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [resumeActive, setResumeActive] = useState(false);
  useEffect(() => {
    if (location === '/hi') {
      setHiActive(true);
      setAboutActive(false);
      setProjectsActive(false);
      setContactActive(false);
      setResumeActive(false);
    } else if (location === '/about') {
      setHiActive(false);
      setAboutActive(true);
      setProjectsActive(false);
      setContactActive(false);
      setResumeActive(false);
    } else if (location === '/projects') {
      setHiActive(false);
      setAboutActive(false);
      setProjectsActive(true);
      setContactActive(false);
      setResumeActive(false);
    } else if (location === '/contact') {
      setHiActive(false);
      setAboutActive(false);
      setProjectsActive(false);
      setContactActive(true);
      setResumeActive(false);
    } else if (location === '/resume') {
      setHiActive(false);
      setAboutActive(false);
      setProjectsActive(false);
      setContactActive(false);
      setResumeActive(true);
    } else {
      setHiActive(false);
      setAboutActive(false);
      setProjectsActive(false);
      setContactActive(false);
      setResumeActive(false);
    }
  }, [location]);
  const images = [
    { url: "/src/assets/backgroundImages/la-4.png"},
    { url: "/src/assets/backgroundImages/golden-gate.png"},
    { url: "/src/assets/backgroundImages/malibu-5.png"},
    { url: "/src/assets/backgroundImages/san-francisco-3.png"},
    { url: "/src/assets/backgroundImages/portugal.png"},
    { url: "/src/assets/backgroundImages/saint-tropez.png"},
    { url: "/src/assets/backgroundImages/charles-river.png"}
  ];

  return (
    <div id="main">
      <Router>
        <div id="nav-div">
          <Header hi={HiActive} 
          about={aboutActive} 
          project={projectsActive} 
          contact={contactActive} 
          resume={resumeActive} 
          toggleTheme={toggleTheme} lightTheme={lightTheme}/>
        </div>
        <div id="body-div">
          <div id='routes-div'>
            <Routes>
              <Route path="/" element={redirectToHi()} />
              <Route path="/hi" element={<Hi images={images} title="Eduardo Marcelino"/>} />
              <Route path="/about" element={<About title="About" />} />
              <Route path="/contact" element={<Contact title="Get in touch" />} />
            </Routes> 
          </div>
          <div id="footer-div">
            <Footer/>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

