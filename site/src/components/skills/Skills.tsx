import SkillProgress from "./SkillProgress";
import "../../assets/style/skills/skills.css"
import { useState } from "react";
import ginImage from "/src/assets/imgs/color.svg";
interface SkillProgressProps{
    theme:boolean;
}

function SkillsComponent({theme}:SkillProgressProps){
    const flask = (
    <i className="devicon-flask-original-wordmark"></i>
    )
    const gin = (
        <img style={{width:"80%", backgroundColor: theme ? 'transparent' : 'white', borderRadius: "90px"}} src={ginImage} alt="gin" />
    )

    const [activeDiv, setActiveDiv] = useState('languages');

    const handleSetActiveDiv = (div: string) => {
        setActiveDiv(div);
    };

    return(
        <div id="skills-main">
            <div id="skills-title"><h2>Skills</h2></div>
            <div id="skills-description">
           <button
              className="buttons-skills"
                onClick={() => handleSetActiveDiv('frameworks')}
                style={{
                    borderColor: activeDiv === 'frameworks' ? (theme ? 'black' : 'white') : 'transparent',
                    color: activeDiv === 'frameworks' ? (theme ? 'black' : 'white') : (theme ? 'gray' : 'gray'),
                    fontSize : activeDiv === 'frameworks' ? '17px' : '15px'
                }}>
                    Frameworks
            </button>

            <button
              className="buttons-skills"
                onClick={() => handleSetActiveDiv('languages')}
                style={{
                    borderColor: activeDiv === 'languages' ? (theme ? 'black' : 'white') : 'transparent',
                    color: activeDiv === 'languages' ? (theme ? 'black' : 'white') : (theme ? 'gray' : 'gray'),
                    fontSize : activeDiv === 'languages' ? '17px' : '15px'
                }}>
                    Languages
            </button>
            <button
              className="buttons-skills"
                onClick={() => handleSetActiveDiv('databases')}
                style={{
                    borderColor: activeDiv === 'databases' ? (theme ? 'black' : 'white') : 'transparent',
                    color: activeDiv === 'databases' ? (theme ? 'black' : 'white') : (theme ? 'gray' : 'gray'),
                    fontSize : activeDiv === 'databases' ? '17px' : '15px'
                }}>
                    Databases
            </button>
            </div>
            <div id="div-languages" style={{ display: activeDiv === 'languages' ? 'block' : 'none' }}>
            <div id="skills-component-section">
                <div className="skills-components"><SkillProgress animate={activeDiv === 'languages'} skill="Java" knowledge="90%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'languages'} skill="Python" knowledge="70%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'languages'} skill="Go" knowledge="90%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'languages'} skill="JavaScript/TypeScript" knowledge="70%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'languages'} skill="Flutter" knowledge="60%"/></div>
                <br />
                <br />  
            </div>
            <div className="images-component-section">
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />  
            </div>
            </div>
            <div id="div-databases" style={{ display: activeDiv === 'databases' ? 'block' : 'none' }}>
            <div id="skills-component-section">
                <div className="skills-components"><SkillProgress animate={activeDiv === 'databases'} skill="MySQL" knowledge="100%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'databases'} skill="PostgreSQL" knowledge="90%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'databases'} skill="MongoDB" knowledge="80%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'databases'} skill="Apache Cassandra" knowledge="80%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'databases'} skill="ScyllaDB" knowledge="80%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'databases'} skill="Redis" knowledge="70%"/></div>
                <br />
                <br />  
            </div>
            <div className="images-component-section">
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />  
            <img className="skill-images"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <img className="skill-images" src="https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg" />
            <img className="skill-images" src="https://www.vectorlogo.zone/logos/scylladb/scylladb-icon.svg" />
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" /> 
            </div>
            </div>
            <div id="div-frameworks" style={{ display: activeDiv === 'frameworks' ? 'block' : 'none' }}>
            <div id="skills-component-section">
                <div className="skills-components"><SkillProgress animate={activeDiv === 'frameworks'} skill="Spring" knowledge="100%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'frameworks'} skill="Flask" knowledge="70%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'frameworks'} skill="Gin" knowledge="80%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'frameworks'} skill="Vue.js" knowledge="80%"/></div>
                <div className="skills-components"><SkillProgress animate={activeDiv === 'frameworks'} skill="React" knowledge="80%"/></div>
                <br />
                <br />  
            </div>
            <div className="images-component-section">
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />        
            <span className="skill-images" style={{color: theme ? "black" : "white"}}>{flask}</span>
            <span className="skill-images">{gin}</span>
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
            <img className="skill-images" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </div>
            </div>
        </div>
    )
}
export default SkillsComponent;