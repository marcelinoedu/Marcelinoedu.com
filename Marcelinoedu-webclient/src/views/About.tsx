import React, { useEffect } from 'react';
interface AboutProps {
  title: string;
}

function About({ title }: AboutProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="about">
      
    </div>
  );
}

export default About;

