import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import "./footer.css"

function Footer() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="main-footer" style={{backgroundColor:theme == "light" ? "white" : "rgb(20, 14, 33)"}}>
      <p style={{color:theme == "light" ? "rgb(20, 14, 33)" : "white" }}>Copyright © 2024 - Eduardo Marcelino</p>
    </div>
  )
}

export default Footer