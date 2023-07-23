import ClubWork from "../../components/about/workComponents/workAtClub";
import "../../assets/style/about/work.css"
interface WorkProps{
    textLanguage:boolean;
}

function Work({textLanguage}:WorkProps){
    return(
        <div id="work-div">
            <div id="title-div">
                <h3>{textLanguage? "Work Experience": "Experiência"}</h3>
                <br />
                <br />
                <br />
            </div>
            <div className="work">
                <ClubWork textLanguage={textLanguage}/>
                <br />
                <br />
            </div>
        </div>
    )
}
export default Work;