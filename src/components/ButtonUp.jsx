import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/ButtonUp.css';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`button-up ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
};

export default ButtonUp;