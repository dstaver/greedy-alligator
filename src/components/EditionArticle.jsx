const React = require('react');
const PropTypes = require('react').PropTypes;

const EditionArticle = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

EditionArticle.propTypes = {
  title: PropTypes.string.isRequired,
};

module.exports = EditionArticle;
