'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
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
  
  test('describes food router', async () => {
    const response = (await request.post('/food')).send({
      name: 'Test',
      category: 'fruit',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Test');
    expect(response.body.category).toEqual('fruit');
    
   
  });
  
  test('handle ingredient router', async () => {
    const response = await request.post('/ingredients').send({
      name: 'Test',
      quantity: 1,
      foodId: 1,
    });
    
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Test');
    expect(response.body.quantity).toEqual(1);
    expect(response.body.foodId).toEqual(1);
  });
  
  //test for non existent route
  test('handle not found', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
  });
  
});

