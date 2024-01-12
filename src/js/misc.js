/**
 * Copyright (c) 2021-
 * FILE DESCRIPTION
 */

export function kFormatter(num, suffix = 'k', lessThanK = '0') {
  if (typeof num !== 'number') {
    return '';
  }
  if (num < 1000) {
    return lessThanK + suffix;
  }
  return Math.sign(num) * (Math.abs(num) / 1000).toFixed(0) + suffix;
}

export function pluralize(val, singularText, pluralText) {
  return val === 1 ? singularText : pluralText;
}
