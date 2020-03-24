import React, { useState, useEffect } from 'react';
import { loadNews } from '../api/api';
import { ArticlesList } from './ArticlesList';

export const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews()
      .then(newsFromApi => setNews(newsFromApi));
  }, []);

  return (
    <>
      <h1 className="text-center mb-5">News</h1>
      {news.length
        ? <ArticlesList news={news} />
        : <div className="spinner-border" />}
    </>
  );
};
