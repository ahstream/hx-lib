import { getUser } from './deca.js';

test('getUserProfile', async () => {
  expect((await getUser('hstream')).username).toEqual('hstream');
});
