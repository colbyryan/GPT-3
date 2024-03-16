import React, { useEffect, useRef } from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

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
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headingRef.current) {
      intersectionObserver.observe(headingRef.current);
    }
    if (containerRef.current) {
      intersectionObserver.observe(containerRef.current);
    }

    return () => {
      if (headingRef.current) {
        intersectionObserver.unobserve(headingRef.current);
      }
      if (containerRef.current) {
        intersectionObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div ref={headingRef} className='gpt3__whatgpt3-feature fade-in'>
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 ref={containerRef} className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='fade-in'>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container fade-in'>
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  );
};

export default WhatGPT3;
