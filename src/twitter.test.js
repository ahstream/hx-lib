/**
 * Copyright (c) 2021-
 * FILE DESCRIPTION
 */

import { convertToTwitterFollowers, extractTwitterHandle } from './twitter.js';

test('convertToTwitterFollowers', () => {
  expect(convertToTwitterFollowers('100 Followers')).toBe(100);
  expect(convertToTwitterFollowers('4,970 Followers')).toBe(4970);
  expect(convertToTwitterFollowers('36k Followers')).toBe(36000);
  expect(convertToTwitterFollowers('70.3k Followers')).toBe(70300);
});

test('extractTwitterHandle', () => {
  expect(extractTwitterHandle('https://x.com/JPEGs_Dao?s=09')).toBe('JPEGs_Dao');
  expect(extractTwitterHandle('https://x.com/JPEGs_Dao/')).toBe('JPEGs_Dao');
});
