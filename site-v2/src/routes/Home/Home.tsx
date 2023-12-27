import Introduction from "../../components/introduction/Introduction"
import ProjectsComponent from "../../components/projects/ProjectsComponent"
import WorkComponent from "../../components/work/WorkComponent"
import "./home.css"
const Home = () => {
  return (
    <div className="main-home-div">
      <Introduction/>
      <WorkComponent/>
      <hr className="line"></hr>
      <ProjectsComponent/>
    </div>
  )
}

export default Home