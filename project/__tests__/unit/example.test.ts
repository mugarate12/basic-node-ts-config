import {describe, expect, test} from '@jest/globals';
import {
  exampleService
} from './../../src/services';

describe('Example unit tests cases', () => {
  describe('Services tests cases', () => {
    test('get message with name ', () => {
      const name = 'Mateus';

      const message = exampleService.formatExampleMessage(name);

      expect(message).toBe('Bem vindo, Mateus! API está funcionando!');
    });
    
    test('get message without name ', () => {
      const message = exampleService.formatExampleMessage();

      expect(message).toBe('API está funcionando!');
    });
  });
});