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

// A SO answer to https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript
// based off the recursive cleanEmpty function by @chickens.
// This one can also handle Date objects correctly
// and has a defaults list for values you want stripped.

export function removeEmptyProps(obj, defaults = [undefined]) {
  if (defaults.includes(obj)) return;

  if (Array.isArray(obj))
    return obj.map((v) => (v && typeof v === 'object' ? removeEmptyProps(v, defaults) : v)).filter((v) => !defaults.includes(v));

  return Object.entries(obj).length
    ? Object.entries(obj)
        .map(([k, v]) => [k, v && typeof v === 'object' ? removeEmptyProps(v, defaults) : v])
        .reduce((a, [k, v]) => (defaults.includes(v) ? a : { ...a, [k]: v }), {})
    : obj;
}
