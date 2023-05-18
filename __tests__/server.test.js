'use strict';

const app = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  //test for proof of life path
  test('handles root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toEqual('Server is alive!');
  });

  //test for non existent route
  test('handle not found', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
  });

});