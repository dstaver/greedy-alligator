const React = require('react');
const PropTypes = require('react').PropTypes;
const EditionArticle = require('./EditionArticle');

const Edition = props => {
  const title = 'Edition';
  const articles = props.items.map(article => <EditionArticle title={article.data.title} />);

  return (
    <div>
      <h1>{title}</h1>
      {articles}
    </div>
  );
};

Edition.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

module.exports = Edition;
