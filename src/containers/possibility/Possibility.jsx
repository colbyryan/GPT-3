import React, { useEffect, useRef } from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.add('slide-in-left'); // Add any other animation classes you want here
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (imageRef.current) {
      intersectionObserver.observe(imageRef.current);
    }
    if (contentRef.current) {
      intersectionObserver.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        intersectionObserver.unobserve(imageRef.current);
      }
      if (contentRef.current) {
        intersectionObserver.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div ref={imageRef} className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" className="possibility__fade-in" />
      </div>
      <div ref={contentRef} className="gpt3__possibility-content">
        <h4 className="fade-in">Request Early Access to Get Started</h4>
        <h1 className="gradient__text slide-in-left">The possibilities are <br /> beyond your imagination</h1>
        <p className="fade-in slide-in-right">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4 className="fade-in slide-in-bottom">Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
