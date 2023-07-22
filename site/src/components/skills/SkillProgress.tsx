import { useEffect, useRef, useState } from 'react';

interface SkillProgressProps {
  skill: string;
  knowledge: string;
  animate: boolean;
}

const SkillProgress = ({ skill, knowledge, animate }: SkillProgressProps) => {
  const skillUpperDivRef = useRef<HTMLDivElement>(null);
  const [animationActive, setAnimationActive] = useState(true);

  useEffect(() => {
    if (animate) {
      if (skillUpperDivRef.current) {
        skillUpperDivRef.current.style.width = '0';
        setTimeout(() => {
          skillUpperDivRef.current!.style.width = knowledge;
        }, 150);
        setAnimationActive(true);
      }
    } else {
      if (skillUpperDivRef.current) {
        skillUpperDivRef.current.style.width = '0';
      }
      setAnimationActive(false);
    }
  }, [animate, knowledge]);

  return (
    <div id="skill-component-main">
      <div className="skill-component-section">
        <h2 style={{ fontSize: "15px", fontWeight: "200" }}>{skill}</h2>
        <h2 style={{ fontSize: "15px", fontWeight: "200" }}>{knowledge}</h2>
      </div>
      <div className="skill-component-section">
        <div id="skill-botton-div">
          <div
            id="skill-upper-div"
            ref={skillUpperDivRef}
            className={animationActive ? 'skill-upper-div-transition' : ''}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;

