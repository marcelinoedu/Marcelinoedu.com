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
  useEffect(() => {
    handleCursorClick(window.location.pathname);
  }, []);
  function handleCursorClick(pathname: string) {
    if (pathname === '/hi') {
      console.log(pathname)
      document.body.classList.add('isActiveHi');
      document.body.classList.remove('isHiddenHi');
      document.body.classList.remove('isActiveAbout');
      document.body.classList.remove('isActiveProject');
      document.body.classList.remove('isActiveContact');
      document.body.classList.remove('isActiveResume');
      document.body.classList.add('isHiddenAbout');
      document.body.classList.add('isHiddenProject');
      document.body.classList.add('isHiddenContact');
      document.body.classList.add('isHiddenResume');
    } else if (pathname === '/about') {
      console.log(pathname)
      document.body.classList.add('isActiveAbout');
      document.body.classList.remove('isHiddenAbout');
      document.body.classList.add('isHiddenHi');
      document.body.classList.add('isHiddenProject');
      document.body.classList.add('isHiddenContact');
      document.body.classList.add('isHiddenResume');
      document.body.classList.remove('isActiveHi');
      document.body.classList.remove('isActiveProject');
      document.body.classList.remove('isActiveContact');
      document.body.classList.remove('isActiveResume');
    } else if (pathname === '/project') {
      console.log(pathname)
      document.body.classList.add('isActiveProject');
      document.body.classList.remove('isHiddenProject');
      document.body.classList.add('isHiddenAbout');
      document.body.classList.add('isHiddenHi');
      document.body.classList.add('isHiddenContact');
      document.body.classList.add('isHiddenResume');
      document.body.classList.remove('isActiveHi');
      document.body.classList.remove('isActiveAbout');
      document.body.classList.remove('isActiveContact');
      document.body.classList.remove('isActiveResume');
    } else if (pathname === '/contact') {
      console.log(pathname)
      document.body.classList.add('isActiveContact');
      document.body.classList.remove('isHiddenContact');
      document.body.classList.add('isHiddenAbout');
      document.body.classList.add('isHiddenProject');
      document.body.classList.add('isHiddenHi');
      document.body.classList.add('isHiddenResume');
      document.body.classList.remove('isActiveHi');
      document.body.classList.remove('isActiveAbout');
      document.body.classList.remove('isActiveProject');
      document.body.classList.remove('isActiveResume');
    } else if (pathname === '/resume') {
      console.log(pathname)
      document.body.classList.add('isActiveResume');
      document.body.classList.remove('isHiddenResume');
      document.body.classList.add('isHiddenContact');
      document.body.classList.add('isHiddenAbout');
      document.body.classList.add('isHiddenProject');
      document.body.classList.add('isHiddenHi');
      document.body.classList.remove('isActiveHi');
      document.body.classList.remove('isActiveAbout');
      document.body.classList.remove('isActiveProject');
      document.body.classList.remove('isActiveContact');
    }
  }
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
          <Header cursorToggle={handleCursorClick} toggleTheme={toggleTheme} lightTheme={lightTheme}/>
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

