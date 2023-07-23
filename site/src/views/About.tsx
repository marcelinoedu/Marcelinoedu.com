import { useEffect } from 'react';
import Introduction from '../components/about/introduction';
import Social from '../components/about/socialIcons';
import "../assets/style/about/about.css";
import SkillsComponent from '../components/skills/Skills';
import Work from '../components/about/work';
interface AboutProps {
  title: string;
  theme: boolean;
  textLanguage:boolean;
}

function About({ title, theme,textLanguage }: AboutProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div id="about">
      <div id="introduction">
        <Introduction textLanguage={textLanguage}/>
      </div>
      <br />
        <br />
      <div id="social">
        <Social/>
      </div>
      <div id="work">
        <br />
        <br />
        <br />
        <SkillsComponent textLanguage={textLanguage} theme={theme}/>
      </div>
      <br />
      <br />
      <Work textLanguage={textLanguage}/>
    </div>
  );
}

export default About;

