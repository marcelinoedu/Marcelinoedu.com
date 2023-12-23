import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'


function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme == "light" ? "white" : "Black", color: theme == "light" ? "black" : "white"}}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
