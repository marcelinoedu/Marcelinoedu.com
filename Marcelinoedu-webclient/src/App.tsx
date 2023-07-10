import Header from "./components/header/header";
import Footer from "./components/footer/Footer"
import PublicRoutes from "./Router/Routes";
import "./assets/style/App.css"

function App() {
  return (
    <div id="main">
      <div id="header-div">
        <Header/>
      </div>
      <div id="body-div">
       <PublicRoutes/>
      </div>
      <div id="footer-div">
        <Footer/>
      </div>

    </div>
  )
}

export default App
