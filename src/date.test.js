import { toTimestamp, isTimestamp } from './date.js';

test('toTimestamp', () => {
  expect(toTimestamp(0, undefined)).toEqual(undefined);
  expect(toTimestamp(0, null)).toEqual(null);
  expect(toTimestamp(-1, null)).toEqual(null);
  expect(toTimestamp(1.23, null)).toEqual(null);
  expect(toTimestamp(undefined, null)).toEqual(null);
  expect(toTimestamp(null, null)).toEqual(null);
  expect(toTimestamp({}, null)).toEqual(null);
  expect(toTimestamp([], null)).toEqual(null);
  expect(toTimestamp([1722883066771], null)).toEqual(null);
  expect(toTimestamp('1722883066771', null)).toEqual(1722883066771);
  expect(toTimestamp(1722883066771, null)).toEqual(1722883066771);
  expect(toTimestamp(12345, null)).toEqual(null);
  expect(toTimestamp('12345', null)).toEqual(null);
  expect(toTimestamp('2024-09-06T17:00:00+00:00', null)).toEqual(1725642000000);
  expect(toTimestamp('2024-09-06T17:00:00+00', null)).toEqual(null);
  expect(toTimestamp('2024-09-06T17:00:00', null)).toEqual(1725634800000);
  expect(toTimestamp('2024-09-06T17:00', null)).toEqual(1725634800000);
  expect(toTimestamp('2024-09-06', null)).toEqual(1725580800000);
  expect(toTimestamp('2024-09-06Z17:00:00+00:00', null)).toEqual(1725642000000);
});

test('isTimestamp', () => {
  expect(isTimestamp(0)).toEqual(false);
  expect(isTimestamp(0)).toEqual(false);
  expect(isTimestamp(-1)).toEqual(false);
  expect(isTimestamp(1.23)).toEqual(false);
  expect(isTimestamp(undefined)).toEqual(false);
  expect(isTimestamp(null)).toEqual(false);
  expect(isTimestamp({})).toEqual(false);
  expect(isTimestamp([])).toEqual(false);
  expect(isTimestamp([1722883066771])).toEqual(false);
  expect(isTimestamp('1722883066771')).toEqual(false);
  expect(isTimestamp(1722883066771)).toEqual(true);
  expect(isTimestamp(172288306677)).toEqual(false);
  expect(isTimestamp(17228830667710)).toEqual(false);
  expect(isTimestamp(12345)).toEqual(false);
  expect(isTimestamp('12345')).toEqual(false);
  expect(isTimestamp('2024-09-06T17:00:00+00:00')).toEqual(false);
  expect(isTimestamp('2024-09-06T17:00:00+00')).toEqual(false);
  expect(isTimestamp('2024-09-06T17:00:00')).toEqual(false);
  expect(isTimestamp('2024-09-06T17:00')).toEqual(false);
  expect(isTimestamp('2024-09-06')).toEqual(false);
  expect(isTimestamp('2024-09-06Z17:00:00+00:00')).toEqual(false);
});
