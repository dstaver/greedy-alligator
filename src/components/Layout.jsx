const React = require('react');
const PropTypes = require('react').PropTypes;
const TopMenu = require('./TopMenu');

const Layout = props => (
  <div>
    <div>{props.title}</div>
    <TopMenu />
    <div>{props.children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

module.exports = Layout;
