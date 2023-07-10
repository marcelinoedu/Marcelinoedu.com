import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from '../views/About';
import Contact from '../views/Contact';
function publicRoutes(){
  const redirectToAbout = () => <Navigate to="/about" replace />;
    return (
        <Router>
          <div>
            <Routes>
              <Route path="/" element={redirectToAbout()} />
              <Route path="/about" element={<About title="Eduardo Marcelino" />} />
              <Route path="/contact" element={<Contact title="Get in touch" />} />
            </Routes>
          </div>  
      </Router> 
    )
}

export default publicRoutes