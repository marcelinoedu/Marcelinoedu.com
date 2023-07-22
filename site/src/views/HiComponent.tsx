import { useEffect, useState } from 'react';
import "../assets/style/hi/hi.css"
import HiContent from '../components/HiComponent/ContentHiComponent';

interface BackgroundImagesProps {
  images: { url: string }[];
  title: string;
  textLanguage: boolean;
}

function HiComponent({ images, title }: BackgroundImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(true);

      // Atualize o estado de isTransitioning após 1 segundo para remover a transição
      setTimeout(() => setIsTransitioning(false), 1000);
    }, 4000);

    // Limpe o intervalo quando o componente for desmontado
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
    transition: isTransitioning ? 'background-image 0.5s ease-in-out' : 'none',
  };

  return (
    <div id="hi-div" style={divStyle}>
      <div id='content-div'>
        <div id='hiComponent-div'>
          <HiContent/>
        </div>
      </div>
    </div>
  );
}

export default HiComponent;


// import AlertComponent from '../components/alertComponent/AlertComponent';

  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   const timer1 = setTimeout(() => setIsVisible(true), 15000);
  //   const timer2 = setTimeout(() => setIsVisible(false), 20000);

  //   return () => {
  //     clearTimeout(timer1);
  //     clearTimeout(timer2);
  //   };
  // }, []);

{/* <div id='alert-compornent-hi'>
          className={`fade-effect ${isVisible ? 'visible' : ''}`}
            { isVisible && <AlertComponent/> }
            <AlertComponent/>
          </div> */}