import { useEffect, useState } from 'react';
import "../assets/style/hi/hi.css"
import HiContent from '../components/HiComponent/ContentHiComponent';

interface BackgroundImagesProps {
  images: { url: string }[];
  title: string;
}

function HiComponent({ images, title }: BackgroundImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.title = title;
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
  }, [images, title]);

  const currentImagePath = images[currentImageIndex].url;
  const divStyle = {
    backgroundImage: `url(${currentImagePath})`,
    transition: isTransitioning ? 'background-image 1s ease-in-out' : 'none',
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

