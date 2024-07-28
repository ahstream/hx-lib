import { writeCache, writeRawCache } from './cache.js';

writeCache('foo/bar/test.json', { foo: 123 });
writeCache('foo.txt', { foo: 123 });
writeRawCache('foo/gh/x.txt', { foo: 123 });
writeCache('foo/bar', { foo: 123 });
