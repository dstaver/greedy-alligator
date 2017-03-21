const config = require('./config');
const fetch = require('node-fetch');

async function getEdition(editionId) {
  const url = config.drEdition.url + editionId;
  return fetch(url, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      Authorization: `apikey ${config.drEdition.apikey}`,
    },
  }).then(res => res.json());
}

module.exports = {
  getEdition,
};
