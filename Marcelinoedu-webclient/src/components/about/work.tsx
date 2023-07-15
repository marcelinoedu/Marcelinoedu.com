import ClubWork from "../../components/about/workComponents/workAtClub";
import CobbleWork from "../../components/about/workComponents/workAtCobble";
import "../../assets/style/about/work.css"

function Work(){
    return(
        <div id="work-div">
            <div id="title-div">
                <h3>Work Experience</h3>
                <br />
                <br />
                <br />
            </div>
            <div className="work">
                <ClubWork/>
                <br />
                <br />
            </div>
            <div className="work">
                 <CobbleWork/>
            </div>
        </div>
    )
}
export default Work;