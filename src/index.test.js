import { greet } from './index';

test('greets the world', () => {
  expect(greet('World')).toBe('Hello, World!');
});