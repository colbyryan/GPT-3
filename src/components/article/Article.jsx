import React, { useEffect, useRef } from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => {
  const articleRef = useRef(null);

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
          entry.target.classList.add('slide-in-right'); // Add any other animation classes you want here
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (articleRef.current) {
      intersectionObserver.observe(articleRef.current);
    }

    return () => {
      if (articleRef.current) {
        intersectionObserver.unobserve(articleRef.current);
      }
    };
  }, []);

  return (
    <div ref={articleRef} className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p className="fade-in">Read Full Article</p>
      </div>
    </div>
  )
}

export default Article;
