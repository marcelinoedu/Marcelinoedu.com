import Introduction from "../../components/introduction/Introduction"
import WorkComponent from "../../components/work/WorkComponent"
import "./home.css"
const Home = () => {
  return (
    <div className="main-home-div">
      <Introduction/>
      <WorkComponent/>
    </div>
  )
}

export default Home