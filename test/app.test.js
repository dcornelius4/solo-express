const request = require('supertest');
const app = require('../lib/app');
const Tweet = require('../lib/models/Tweet');

describe('app routes', () => {
  afterEach(() => {
    return Tweet.drop();
  });
  it('can create a new tweet', () => {
    return request(app)
      .post('/tweets')
      .send({
        handle: 'ryan',
        body: 'my first tweet'
      })
      .then(res => {
        expect(res.body).toEqual({
          handle: 'ryan',
          body: 'my first tweet',
          _id: expect.any(String)
        });
      });
  });
});
