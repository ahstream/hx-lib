/**
 * Copyright (c) 2021-
 * FILE DESCRIPTION
 */

export function getQueryParam(href, key) {
  return getSearchParam(href, key);
}

export function getSearchParam(href, key) {
  try {
    return new URL(href).searchParams.get(key);
  } catch (e) {
    console.error('getSearchParam error; href, key, error:', href, key, e);
    return null;
  }
}

export function addQueryParam(url, key, val) {
  if (!key || !val) {
    return url;
  }
  const prefix = url.includes('?') ? '&' : '?';
  return url + `${prefix}${key}=${val}`;
}

export const isValidURL = (uri) => {
  try {
    return new URL(uri);
  } catch (_) {
    return false;
  }
};

export function removeHashFromUrl(url) {
  const index = url.indexOf('#');
  return index > 0 ? url.substr(0, index) : url;
}

export function extractURLs(text) {
  // eslint-disable-next-line no-useless-escape
  const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const matches = [...text.matchAll(re)];
  return matches.map((x) => x[0]);
}

export function removeUrlArgs(url) {
  const u = new URL(url);
  return u.origin + u.pathname;
}

export function parseReactProps(html) {
  try {
    if (!html?.match) {
      return null;
    }
    const m = html.match(/<script id="__NEXT_DATA__"[\s\S]*?>([\s\S]*?)<\/script>/i);
    //console.log('m', m[1]);
    if (m?.length !== 2) {
      return null;
    }
    return JSON.parse(m[1]);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function getCookie(name, from = document?.cookie || '') {
  const value = `; ${from}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
