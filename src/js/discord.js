/**
 * Copyright (c) 2021-
 * Utility functions for Discord.
 */

export function makeDiscordURL(handle, err = '') {
  return makeDiscordInviteURL(handle, err);
}

export function makeDiscordInviteURL(handle, err = '') {
  if (!handle || typeof handle !== 'string') {
    return err;
  }
  return `https://discord.com/invite/${handle}`;
}

export function isDiscordURL(url) {
  return isDiscordPage(url);
}

export function isDiscordPage(url, err = false) {
  if (!url || typeof url !== 'string') {
    return err;
  }
  return !!url.match(/(https?:\/\/)?(www\.)?discord\.(com|gg)/gi);
}

export function isDiscordInvitePage(url, err = false) {
  if (!url || typeof url !== 'string') {
    return err;
  }
  const res = !!url.match(/(https?:\/\/)?(www\.)?(((discordapp|discord)\.com\/invite)|(discord\.gg))\/(\w+)/gm);
  //console.log('isDiscordInvitePage; url, res', url, res);
  return res;
}

export function extractDiscordHandle(url, err = '') {
  if (typeof url !== 'string') {
    return err;
  }
  // eslint-disable-next-line no-useless-escape
  const matches = [...url.matchAll(/(https?:\/\/)?(www\.)?(((discordapp|discord)\.com\/invite)|(discord\.gg))\/([a-z0-9\-]+)/gi)];
  const matchesArr = [...matches].flat();
  //console.log('extractDiscordHandle; url, res', url, matches, matchesArr);
  return matchesArr?.length >= 6 ? matchesArr[matchesArr.length - 1] : err;
}
/*
export function extractDiscordHandle(url) {
  return !url ? '' : getLastTokenizedItem(url, '/');
}
*/
