import { useEffect, useState } from 'react';
import "../assets/style/hi/hi.css"
import HiContent from '../components/HiComponent/ContentHiComponent';
import AlertComponent from '../components/alertComponent/AlertComponent';

interface BackgroundImagesProps {
  images: { url: string }[];
  title: string;
  textLanguage: boolean;
}

function HiComponent({ images, title, textLanguage }: BackgroundImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
        const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const currentImagePath = images[currentImageIndex].url;
  const divStyle = {
    backgroundImage: `url(${currentImagePath})`,
    transition: isTransitioning ? 'background-image 1s ease-in-out' : 'none',
  };

  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   const timer1 = setTimeout(() => setIsVisible(true), 15000);
  //   const timer2 = setTimeout(() => setIsVisible(false), 20000);

  //   return () => {
  //     clearTimeout(timer1);
  //     clearTimeout(timer2);
  //   };
  // }, []);

  return (
    <div id="hi-div" style={divStyle}>
      <div id='content-div'>
        <div id='hiComponent-div'>
          <HiContent/>
          {/* <div id='alert-compornent-hi'>
          className={`fade-effect ${isVisible ? 'visible' : ''}`}
            { isVisible && <AlertComponent/> }
            <AlertComponent/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HiComponent;

