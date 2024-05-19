/**
 * Copyright (c) 2021-
 * Utility functions for Discord.
 */

import { getLastTokenizedItem } from './string.js';

export function extractDiscordHandle(url) {
  return !url ? '' : getLastTokenizedItem(url, '/');
}

export function makeDiscordURL(handle) {
  if (!handle || typeof handle !== 'string') {
    return '';
  }
  return `https://discord.com/invite/${handle}`;
}

export function isDiscordURL(url) {
  if (!url?.match) {
    return false;
  }
  if (url.match(/(?:www\.)?discord.com\//i)) {
    return true;
  }
  return false;
}
