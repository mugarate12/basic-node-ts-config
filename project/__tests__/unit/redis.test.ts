import {describe, expect, test} from '@jest/globals';

import {
  redis
} from './../../src/config';

describe('Example to use Redis', () => {
  test('set and get value async with Redis', async () => {
    const key = 'test';
    const value = 'test_value';

    await redis.setAsync(key, value);
    const result = await redis.getAsync(key);

    expect(result).toBe(value);
  });
});