const React = require('react');
const PropTypes = require('react').PropTypes;
const Layout = require('../components/Layout');
const Edition = require('../components/Edition');

const Index = ({ items, title }) => (
  <Layout title={title}>
    <Edition items={items} />
  </Layout>
);

Index.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

module.exports = Index;
