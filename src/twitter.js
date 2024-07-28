/**
 * Copyright (c) 2021-
 * Utility functions for Twitter.
 */

import { getSearchParam } from './web.js';
import { onlyNumbers } from './string.js';

export function extractTwitterHandle(url, err = '') {
  if (!url || typeof url !== 'string') {
    return err;
  }
  const screenName = getSearchParam(url, 'screen_name');
  if (screenName) {
    return screenName;
  }
  const match = url.match(/^(?:https?:)?(?:\/\/)?(www\.)?(twitter|x).com\/@?(?<handle>\w+)/);
  return match?.groups?.handle ? `${match.groups.handle}` : err;
}

export function extractTweetId(url, err = '') {
  if (!url) {
    return err;
  }
  const id = getSearchParam(url, 'tweet_id');
  if (id) {
    return id;
  }
  // https://twitter.com/yangbis76/status/1709019523683328231
  const match = url.match(/^(?:https?:)?(?:\/\/)?(www\.)?(twitter|x).com\/@?(?<handle>\w+)\/status\/@?(?<id>\w+)/);
  return match?.groups?.id ? `${match.groups.id}` : err;
}

export function isTwitterLink(url) {
  return isTwitterPage(url);
}

export function isTwitterURL(url) {
  return isTwitterPage(url);
}

export function isTwitterPage(url, err = false) {
  if (!url || typeof url !== 'string') {
    return err;
  }
  return !!url.match(/(https?:\/\/)?(www\.)?(twitter|x)\.com/gi);
}

export function isTwitterStartPage(url, err = false) {
  if (!url || typeof url !== 'string') {
    return err;
  }
  return !!url.match(/(https?:\/\/)?(www\.)?(twitter|x)\.com\/$/gi);
}

export function isTwitterStatusPage(url, err = false) {
  if (!url || typeof url !== 'string') {
    return err;
  }
  // eslint-disable-next-line no-useless-escape
  return !!url.match(/[(?:https?:\/\/(?:twitter|x)\.com)](\/(?:#!\/)?(\w+)\/status(es)?\/(\d+))/i);
}

export function isTwitterProfilePage(url, err = false) {
  if (!url || typeof url !== 'string') {
    return err;
  }
  // eslint-disable-next-line no-useless-escape
  return !!url.match(/(https:\/\/(?:twitter|x)\.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/i);
}

export function isTwitterUserPage(url) {
  return isTwitterProfilePage(url);
}

export function makeTwitterURL(handle, { x = false } = {}) {
  return makeTwitterProfileURL(handle, { x });
}

export function makeTwitterProfileURL(handle, { x = false } = {}) {
  if (!handle || typeof handle !== 'string') {
    return '';
  }
  return x ? `https://x.com/${handle}` : `https://twitter.com/${handle}`;
}

export function makeTwitterFollowIntentUrl(url, err = '') {
  if (!url || typeof url !== 'string') {
    return err;
  }
  if (url.includes('/intent/follow') || url.includes('/intent/user')) {
    return url;
  }
  const val = extractTwitterHandle(url);
  const key = onlyNumbers(val) ? 'user_id' : 'screen_name';
  return `https://twitter.com/intent/user?${key}=${val}`;
}

// https://twitter.com/yangbis76/status/1709019523683328231
// https://twitter.com/intent/retweet?utm_source=alphabot.app&tweet_id=1710376441869672482
export function makeTwitterRetweetIntentUrl(url, err = '') {
  if (!url || typeof url !== 'string') {
    return err;
  }
  if (url.includes('/intent/retweet')) {
    return url;
  }
  const id = extractTweetId(url);
  return `https://twitter.com/intent/retweet?tweet_id=${id}`;
}

// https://twitter.com/yangbis76/status/1709019523683328231
// https://twitter.com/intent/retweet?utm_source=alphabot.app&tweet_id=1710376441869672482
export function makeTwitterLikeIntentUrl(url, err = '') {
  if (!url || typeof url !== 'string') {
    return err;
  }
  if (url.includes('/intent/like')) {
    return url;
  }
  const id = extractTweetId(url);
  return `https://twitter.com/intent/like?tweet_id=${id}`;
}

export function convertTwitterSnowflakeToDate(snowflake) {
  const TWITTER_EPOCH = 1288834974657;
  return new Date(Number(snowflake) / 4194304 + TWITTER_EPOCH);
}

export function convertToTwitterFollowers(text) {
  // 4,970 Followers
  // 36k Followers
  // 70.3k Followers

  if (typeof text !== 'string') {
    return null;
  }
  let s = text.toLowerCase().replaceAll('followers', '').replaceAll(',', '').trim();
  if (s.includes('k')) {
    if (s.includes('.')) {
      s = s.replace('.', '').replace('k', '00');
    } else {
      s = s.replace('k', '000');
    }
  }
  try {
    return Number(s);
  } catch (e) {
    return null;
  }
}
