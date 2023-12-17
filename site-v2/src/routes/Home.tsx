import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import Introduction from "../components/introduction/Introduction"

const Home = () => {

  const {theme} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme == "light" ? "white" : "rgb(20, 14, 33)"}}>
      <Introduction/>
      {/* jobs */}
      {/* projects */}
    </div>
  )
}

export default Home