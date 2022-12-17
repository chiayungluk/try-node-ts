import hello from '../src/main';

test('hello', () => {
  expect(hello()).toEqual('hello world');
});
