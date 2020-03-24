// eslint-disable-next-line max-len
const API_URL = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=1f247f15fab74ebb9e5898af7565afb8';

export const loadNews = () => fetch(API_URL)
  .then(response => response.json())
  .then(data => data.articles);
