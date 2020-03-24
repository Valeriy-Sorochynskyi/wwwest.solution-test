import React from 'react';
import PropTypes from 'prop-types';
import { Article, articleTypes } from './Article';

export const ArticlesList = ({ news }) => (
  <div className="d-flex flex-wrap justify-content-around">
    {news.map(article => (
      <Article
        key={article.title}
        title={article.title}
        desc={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
      />
    ))}
  </div>
);

ArticlesList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape(articleTypes)).isRequired,
};
