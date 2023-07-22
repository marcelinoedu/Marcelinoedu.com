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
  const redirectToHi = () => <Navigate to="/Eduardo" replace />;
  const [lightTheme, setLightTheme] = useState(true);
  const [englishtext, setEnglishText] = useState(true);
  
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
  const toggleText = () =>{
    setEnglishText(!englishtext);
  }
  useEffect(() => {
    handleCursorClick(window.location.pathname);
  }, []);
  function handleCursorClick(pathname: string) {
    if (pathname === '/Eduardo') {
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

  
  return (
    <div id="main">
      <Router>
        <div id="nav-div">
          <Header setText={toggleText} cursorToggle={handleCursorClick} toggleTheme={toggleTheme} textLanguage={englishtext} lightTheme={lightTheme}/>
        </div>
        <div id="body-div">
          <div id='routes-div'>
            <Routes>
              <Route path="/" element={redirectToHi()} />
              <Route path="/Eduardo" element={<Hi textLanguage={englishtext} title="Eduardo Marcelino"/>} />
              <Route path="/about" element={<About theme={lightTheme} title="About" />} />
              <Route path="/projects" element={redirectToHi()} />
              <Route path="/contact" element={<Contact title="Get in touch" />} />
              <Route path="/Resume" element={redirectToHi()} />
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

