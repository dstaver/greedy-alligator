const test = require('tape');
const config = require('../src/server/config');
const drEdition = require('../src/server/drEdition');

test('drEdition returns valid data', t => {
  t.plan(1);
  drEdition.getEdition(config.drEdition.frontpageEditionId).then(data => {
    t.equal('data' in data && 'type' in data.data && data.data.type === 'editions', true);
  });
});
