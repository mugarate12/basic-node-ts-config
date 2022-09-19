import {describe, expect, test} from '@jest/globals';
import request from 'supertest';
import app from '../../src/app';

describe('Example integration tests cases', () => {
  describe('Request tests cases', () => {
    test('successful request base path route', async () => {
      const requestBasePath = await request(app)
        .get('/');

      expect(requestBasePath.status).toBe(200);
      expect(requestBasePath.body).toEqual({ message: 'API está funcionando!' });
    });
    
    test('successful request base path route with query param "name"', async () => {
      const name = 'Mateus';

      const requestBasePath = await request(app)
        .get('/')
        .query({ name });

      expect(requestBasePath.status).toBe(200);
      expect(requestBasePath.body).toEqual({ message: 'Bem vindo, Mateus! API está funcionando!' });
    });
  });
});