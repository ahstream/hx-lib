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
