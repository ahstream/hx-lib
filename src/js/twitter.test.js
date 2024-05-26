/**
 * Copyright (c) 2021-
 * FILE DESCRIPTION
 */

import { convertToTwitterFollowers } from './twitter.js';

test('convertToTwitterFollowers', () => {
  expect(convertToTwitterFollowers('100 Followers')).toBe(100);
  expect(convertToTwitterFollowers('4,970 Followers')).toBe(4970);
  expect(convertToTwitterFollowers('36k Followers')).toBe(36000);
  expect(convertToTwitterFollowers('70.3k Followers')).toBe(70300);
});
