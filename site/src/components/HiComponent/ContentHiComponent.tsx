import "../../assets/style/hi/ContentHiComponent.css"
import SocialIcons from "../../components/about/socialIcons"
import TypingComponent from "./TypingComponent";

interface HiComponentProps{
    textLanguage:boolean;
}
function HiContent({textLanguage}:HiComponentProps){
    const hi = textLanguage ? "Hi👋" : "Olá👋";
    return (
        <div id="main-hiComponent">
            <div className="hiComponent-divs">
                <span id="title-hi">{hi}</span>   
                {/* <img src="/src/assets/waving_hand.gif" alt="having-hand" height={`50px`} width={`50px`}/> */}
            </div>
            <div className="hiComponent-divs">
                <TypingComponent textLanguage={textLanguage}/>
            </div>
            <div id="hiComponent-social">
                <span id="social-icons-section">
                    <SocialIcons/>
                </span>
            </div>
        </div>
    )
}

export default HiContent;