import { useEffect, useState } from 'react';
import "../assets/style/hi/hi.css"
import HiContent from '../components/HiComponent/ContentHiComponent';
import image1 from "../assets/backgroundImages/la-4.png";
import image2 from "../assets/backgroundImages/golden-gate.png";
import image3 from "../assets/backgroundImages/malibu-5.png";
import image4 from "../assets/backgroundImages/san-francisco-3.png";
import image5 from "../assets/backgroundImages/portugal.png";
import image6 from "../assets/backgroundImages/saint-tropez.png";
import image7 from "../assets/backgroundImages/charles-river.png";

interface BackgroundImagesProps {
  title: string;
  textLanguage: boolean;
}

interface BackgroundImage {
  url: string;
}

function HiComponent({ title }: BackgroundImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images: BackgroundImage[] = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image6 },
    { url: image7 }
  ];

  // Função para pré-carregar as imagens
  const preloadImages = () => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  };

  useEffect(() => {
    // Pré-carregar as imagens antes de iniciar o carrossel
    preloadImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 500);

      setTimeout(() => setIsTransitioning(false), 1000);
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
    transition: isTransitioning ? '0.5s ease-in-out' : 'none',
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