const { expect } = require('chai');
const request = require('supertest');

const app = require('../index.js');

const expected = 2;

describe('My first test', () => {
  it('should pass test', () => {
    expect(2).to.equal(expected);
  });
  it('should fail test', () => {
    expect(4).to.not.equal(expected);
  });
});

describe('GET /', () => {
  it('should respond with 200', () => {
    request(app)
      .get('/')
      .end((err, res) => expect(res.status).to.equal(200));
  });
});
