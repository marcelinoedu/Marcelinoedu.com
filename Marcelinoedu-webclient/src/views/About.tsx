import React, { useEffect } from 'react';
import Introduction from '../components/about/introduction';
import Work from '../components/about/work';
import Social from '../components/about/socialIcons';
import "../assets/style/about/about.css";
interface AboutProps {
  title: string;
}

function About({ title }: AboutProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div id="about">
      <div id="introduction">
        <Introduction/>
      </div>
      <div id="social">
        <Social/>
      </div>
      <div id="work">
        <Work/>
      </div>
    </div>
  );
}

export default About;

