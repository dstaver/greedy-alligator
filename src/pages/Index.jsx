const React = require('react');
const PropTypes = require('react').PropTypes;
const Layout = require('../components/Layout');
const Edition = require('../components/Edition');
const Styletron = require('styletron-server');
const StyletronProvider = require('styletron-react').StyletronProvider;

const Index = props => (
  <StyletronProvider styletron={props.styletron}>
    <Layout title={props.title}>
      <Edition items={props.items} />
    </Layout>
  </StyletronProvider>
);

Index.propTypes = {
  styletron: PropTypes.instanceOf(Styletron).isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

module.exports = Index;
