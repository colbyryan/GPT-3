import React, { useEffect, useRef } from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
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
          entry.target.classList.add('slide-in-left'); // Add any other animation classes you want here
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
    <div className="gpt3__blog section__padding" id="blog">
      <div ref={headingRef} className="gpt3__blog-heading">
        <h1 className="gradient__text fade-in">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div ref={containerRef} className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA fade-in">
          <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" />
        </div>
        <div className="gpt3__blog-container_groupB fade-in">
          <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
