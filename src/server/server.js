require('babel-register');

// React related modules
const renderToString = require('react-dom/server').renderToString;
const Styletron = require('styletron-server');

// ExpressJS modules
const express = require('express');
const nunjucks = require('nunjucks');
const compression = require('compression');
const sharedContext = require('shared-context');
const minifyHTML = require('express-minify-html');

// Project modules
const config = require('./config.js');
const drEdition = require('./drEdition');
const IndexPage = require('../pages/Index.jsx');

const isDev = config.env === 'development';

const app = express();
app.use(compression());
app.use('/static', express.static('static'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('xkey', 'abcnyheter-web');
  next();
});

app.use(
  minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      minifyJS: true,
    },
  })
);

nunjucks.configure('src/server/views', {
  autoescape: true,
  express: app,
  watch: isDev,
  noCache: isDev,
});

app.set('view engine', 'njk');

app.use(sharedContext());

//eslint-disable-next-line
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  console.log('Rendering /');
  drEdition.getEdition(config.drEdition.frontpageEditionId).then(edition => {
    const template = 'index.njk';
    const styletron = new Styletron();

    const context = {
      styletron,
      title: 'Frontpage title',
      items: edition.data.attributes.items,
    };

    const data = {
      app: renderToString(IndexPage(context)),
      context: JSON.stringify(context),
      styles: styletron.getStylesheetsHtml(),
    };

    res.render(template, data);
  });
});

app.get('/react', (req, res) => {
  console.log('hello react');
  res.render('react', {
    items: 'hello',
  });
});

app.listen(config.port);
console.log(`Server listening on ${config.port}`);
