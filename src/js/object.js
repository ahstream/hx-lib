export function toObjArray(obj) {
  const arr = [];
  for (const prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
}

export function ensureProperty(parent, name, defaultVal = {}) {
  if (!parent[name]) {
    parent[name] = defaultVal;
    return false;
  }
  return true;
}

export function removeUndefinedProps(obj) {
  return Object.fromEntries(
    Object.entries(obj)
      // eslint-disable-next-line no-unused-vars
      .filter(([_, v]) => v !== undefined)
      .map(([k, v]) => [k, v === Object(v) ? removeUndefinedProps(v) : v])
  );
}
