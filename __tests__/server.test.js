'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const { test } = require('node:test');
const mockRequest = supertest(app);

const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});


//NUKES THE TEST TO END
afterAll( async () =>{
  await sequelizeDatabase.drop();
} );

describe('Server', () => {
  //test for proof of life path
  test('handles root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toEqual('I AM ALIVE!');
  });

  test('handles food router', async () => {
    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.category).toEqual('test');
  });

  test('handle ingredient router', async () => {
    const response = await request.get('/ingredients');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.category).toEqual('test');
  });

  //test for non existent route
  test('handle not found', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
  });

});