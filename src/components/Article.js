import React from 'react';
import PropTypes from 'prop-types';

export const articleTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
};

export const Article = ({ title, desc, url, urlToImage }) => (
  <div
    className="card col-5 m-3"
  >
    <img src={urlToImage} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {desc}
      </p>
      <a
        href={url}
        className="btn btn-primary"
        rel="noopener noreferrer"
        target="_blank"
      >
        Read more
      </a>
    </div>
  </div>
);

Article.propTypes = articleTypes;
Article.defaultProps = {
  desc: 'undefined',
};
