const { expect } = require('chai');
const request = require('supertest');

const app = require('../index.js');

const expected = 2;

describe('My first test', () => {
  it('should pass test', (done) => {
    expect(2).to.equal(expected);
    done();
  });
  it('should fail test', (done) => {
    expect(4).to.not.equal(expected);
    done();
  });
});

describe('GET /', () => {
  it('should respond with 200', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
