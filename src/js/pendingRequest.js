// PENDING REQUEST -------------------------------------------------------------------

import { sleep } from './promise';

export async function addPendingRequest(url, data = {}) {
  // console.log('addPendingRequest', url, data);
  const key = normalizePendingLink(url);
  const obj = {};
  obj[key] = { ...data, created: Number(new Date()), isPendingRequest: true };
  await chrome.storage.local.set(obj);
}

export async function dispatch(url, lifetimeSecs = null, lazyMatchTo = false) {
  console.log('dispatch; url, lifetimeSecs, lazyMatchTo:', url, lifetimeSecs, lazyMatchTo);

  const key = normalizePendingLink(url);
  console.log('dispatch; key:', key);

  //console.log('storageAll', await chrome.storage.local.get());

  let result = null;

  await sleep(100);

  const container = await chrome.storage.local.get(key);
  console.log('dispatch; container:', container);
  if (container) {
    result = await dispatchContainer(container, key, lifetimeSecs);
  }
  if (result) {
    return result;
  }

  let lazyKey = null;
  if (lazyMatchTo) {
    const urlObj = new URL(url);
    urlObj.search = '';
    urlObj.hash = '';
    lazyKey = normalizePendingLink(urlObj.toString());
  }
  const lazyContainer = lazyKey ? await chrome.storage.local.get(lazyKey) : null;
  console.log('dispatch; lazyContainer, lazyKey:', lazyContainer, lazyKey);
  if (lazyContainer) {
    return dispatchContainer(lazyContainer, lazyKey, lifetimeSecs);
  }
  return null;
}

export async function dispatchOld(url, lifetimeSecs = null, lazyMatchTo = false) {
  console.log('dispatch; url, lifetimeSecs, lazyMatchTo:', url, lifetimeSecs, lazyMatchTo);

  const key = normalizePendingLink(url);
  console.log('dispatch; key:', key);

  //console.log('storageAll', await chrome.storage.local.get());

  let result = null;

  const container = await chrome.storage.local.get(key);
  console.log('dispatch; container:', container);
  if (container) {
    result = await dispatchContainer(container, key, lifetimeSecs);
  }
  if (result) {
    return result;
  }

  let lazyKey = null;
  if (lazyMatchTo) {
    const urlObj = new URL(url);
    urlObj.search = '';
    urlObj.hash = '';
    lazyKey = normalizePendingLink(urlObj.toString());
  }
  const lazyContainer = lazyKey ? await chrome.storage.local.get(lazyKey) : null;
  console.log('dispatch; lazyContainer, lazyKey:', lazyContainer, lazyKey);
  if (lazyContainer) {
    return dispatchContainer(lazyContainer, lazyKey, lifetimeSecs);
  }
  return null;
}

async function dispatchContainer(container, key, lifetimeSecs) {
  let request = container ? container[key] : null;
  console.log('dispatchContainer; container, key, request:', container, key, request);
  if (request) {
    if (lifetimeSecs) {
      const whenDead = new Date(request.created + lifetimeSecs * 1000);
      const dateNow = new Date();
      if (dateNow > whenDead) {
        request = null;
      }
      await cleanupPendingRequests(lifetimeSecs);
    }
    await chrome.storage.local.remove([key]);
  }
  return request;
}

export function normalizePendingLink(url) {
  // Remove http(s) from link to avoid redirects to https not matching with original http request in pending requests!
  const hashIndex = url.indexOf('#');
  const removedHashUrl = url.substr(0, hashIndex > 0 ? hashIndex : url.length);
  return removedHashUrl
    .replace(/https?:\/\//i, '')
    .replace('www.discord.gg/', '')
    .replace('www.discord.com/invite/', '')
    .replace('discord.gg/', '')
    .replace('discord.com/invite/', '');
}

async function cleanupPendingRequests(lifetimeSecs) {
  // console.log('cleanupPendingRequests:', lifetimeSecs);
  const storage = await chrome.storage.local.get();
  for (let [key, value] of Object.entries(storage)) {
    // console.log(key, value);
    if (isOldPendingRequest(value, lifetimeSecs)) {
      // console.log('remove old key:', key);
      await chrome.storage.local.remove([key]);
    }
  }
}

function isOldPendingRequest(obj, lifetimeSecs) {
  // console.log('isOldPendingRequest:', obj, lifetimeSecs);
  if (!obj?.action) {
    return false;
  }
  if (obj.isPendingRequest) {
    return isOldPendingRequestChecker(obj, lifetimeSecs);
  }
  if (typeof obj.action === 'string' && obj.action.length > 0 && typeof obj.created === 'object' && Object.keys(obj.created).length === 0) {
    // Catch old bug when pending requests were saved without create date!
    return true;
  }
  if (typeof obj.created !== 'number') {
    return false;
  }
  return isOldPendingRequestChecker(obj, lifetimeSecs);
}

function isOldPendingRequestChecker(obj, lifetimeSecs) {
  const dateNow = Date.now();
  const dateWhenOld = obj.created + lifetimeSecs * 1000;
  //// console.log('dateNow, dateWhenOld', dateNow, dateWhenOld);
  if (dateNow > dateWhenOld) {
    return true;
  }
  return false;
}
