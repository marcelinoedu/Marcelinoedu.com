import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/Footer"
import "./assets/style/App.css"
import About from './views/About';
import Contact from './views/Contact';

function App() {
  const redirectToAbout = () => <Navigate to="/about" replace />;
  return (
    <div id="main">
      <div id="body-div">
      <Router>
        <div id="header-div">
            <Header/>
        </div>

        <div id='routes-div'>
        <Routes>
              <Route path="/" element={redirectToAbout()} />
              <Route path="/about" element={<About title="Eduardo Marcelino" />} />
              <Route path="/contact" element={<Contact title="Get in touch" />} />
        </Routes> 
        </div>
            
        <div id="footer-div">
        <Footer/>
        </div>

      </Router> 
      
      </div>
    </div>
  )
}

export default App
