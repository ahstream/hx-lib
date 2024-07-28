/**
 * Copyright (c) 2021-
 * Utility functions for Google Chrome browser extension.
 */

export function getStorageData() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      return resolve(result);
    });
  });
}
export async function loadStorage({ to = {}, key = null, keys = [], ensure = [] } = {}) {
  let storage = to;
  if (key) {
    const storageTemp = await getStorageItems([key]);
    storage[key] = storageTemp[key];
  } else {
    storage = await getStorageItems(keys?.length ? keys : null);
  }
  return await setBaseStorage(storage, ensure);
}

async function setBaseStorage(storage, ensure) {
  let modified = false;
  ensure.forEach((b) => {
    if (!storage[b.key]) {
      storage[b.key] = b.val;
      modified = true;
    }
  });
  if (modified) {
    await setStorageData(storage);
  }
  return storage;
}

export function setStorageData(data) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(data, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      return resolve();
    });
  });
}
export async function saveStorage(data) {
  await setStorageData(data);
}

export function getStorageItem(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      return resolve(result[key]);
    });
  });
}

export function getStorageItems(keys) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(keys, (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      return resolve(result);
    });
  });
}

export function setStorageItem(key, value) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [key]: value }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }

      return resolve();
    });
  });
}

export async function removeStorageItem(key) {
  await chrome.storage.local.remove([key]);
}

export async function initializeStorageWithDefaults(defaults) {
  const currentStorageData = await getStorageData();
  const newStorageData = Object.assign({}, defaults, currentStorageData);
  await setStorageData(newStorageData);
}

export async function initStorageWithOptions(defaultOptions = {}, overrideOptions = {}, customStorage = {}) {
  const storage = await getStorageData();
  storage.options = storage.options || {};
  const finalOptions = { ...defaultOptions, ...storage.options, ...overrideOptions };
  console.log('Storages:', {
    storage,
    defaultOptions,
    currentOptions: storage.options,
    overrideOptions,
    customStorage,
    finalOptions,
  });
  storage.options = finalOptions;
  await setStorageData({ options: finalOptions, ...customStorage });
  console.log('Storage:', await getStorageData());
}
