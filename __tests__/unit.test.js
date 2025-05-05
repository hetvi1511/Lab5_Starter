// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// phone number testing
test('isPhoneNumber - valid inputs', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber - invalid inputs', () => {
  expect(isPhoneNumber('12!4567890')).toBe(false);
  expect(isPhoneNumber('hello world')).toBe(false);
});

//email testing
test('isEmail - valid inputs', () => {
  expect(isEmail('testing@example.com')).toBe(true);
  expect(isEmail('student@ucsd.edu')).toBe(true);
});

test('isEmail - invalid inputs', () => {
  expect(isEmail('notan-email')).toBe(false);
  expect(isEmail('bad@email')).toBe(false);
});

// strong password testing
test('isStrongPassword - valid inputs', () => {
  expect(isStrongPassword('GoodPassword1')).toBe(true);
  expect(isStrongPassword('strong_pAsswOrd')).toBe(true);
});

test('isStrongPassword - invalid inputs', () => {
  expect(isStrongPassword('123abc')).toBe(false);
  expect(isStrongPassword('ab')).toBe(false);
});

// date testing
test('isDate - valid inputs', () => {
  expect(isDate('12/25/2024')).toBe(true);
  expect(isDate('1/1/2022')).toBe(true);
});

test('isDate - invalid inputs', () => {
  expect(isDate('2022/12/25')).toBe(false);
  expect(isDate('01-01-2020')).toBe(false);
});

// hex color testing
test('isHexColor - valid inputs', () => {
  expect(isHexColor('#FFF')).toBe(true);
  expect(isHexColor('123abc')).toBe(true);
});

test('isHexColor - invalid inputs', () => {
  expect(isHexColor('xyz')).toBe(false);
  expect(isHexColor('#1234')).toBe(false);
});