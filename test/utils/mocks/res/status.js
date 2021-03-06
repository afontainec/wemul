// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const { utils } = require('../../../..');

const Res = utils.mocks.express.res;

const res = new Res();

const { assert } = chai;

// Our parent block
describe('Utils: mock res status', () => { // eslint-disable-line no-undef, max-lines-per-function
  it('happy path', (done) => { // eslint-disable-line no-undef
    const result = res.status(400);
    assert.equal(res.statusToSend, 400);
    assert.equal(res, result);
    done();
  });
});
