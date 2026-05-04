// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('valid phone number with parentheses and space', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('valid phone number with dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('invalid format and digit  count', () => {
    expect(isPhoneNumber('12-34-56')).toBe(false);
  });

  test('invalid phone number(wrong format)', () => {
    expect(isPhoneNumber('123 456 7890')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email with simple domain', () => {
    expect(isEmail('user@example.com')).toBe(true);
  });

  test('valid email with underscore', () => {
    expect(isEmail('test_user@domain.co')).toBe(true);
  });

  test('invalid email - missing domain extension', () => {
    expect(isEmail('user@example')).toBe(false);
  });

  test('invalid email - domain starts with number', () => {
    expect(isEmail('user@123example.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid password with letters and numbers', () => {
    expect(isStrongPassword('Password1234')).toBe(true);
  });

  test('valid password with underscore', () => {
    expect(isStrongPassword('Password_123')).toBe(true);
  });

  test('invalid password - starts with number', () => {
    expect(isStrongPassword('1Password')).toBe(false);
  });

  test('invalid password - too short', () => {
    expect(isStrongPassword('Ps1')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid date with single digit month and day', () => {
    expect(isDate('5/4/2026')).toBe(true);
  });

  test('valid date with double digit month and day', () => {
    expect(isDate('05/04/2026')).toBe(true);
  });

  test('invalid date - dashes', () => {
    expect(isDate('05-04-2026')).toBe(false);
  });

  test('invalid date - wrong year format', () => {
    expect(isDate('05/04/26')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid 3 character hex color without hash', () => {
    expect(isHexColor('ABC')).toBe(true);
  });

  test('valid 6-character hex color with hash', () => {
    expect(isHexColor('#fdcbda')).toBe(true);
  });

  test('invalid hex color (invalid character)', () => {
    expect(isHexColor('#GGGGGG')).toBe(false);
  });

  test('invalid hex color (5 characters)', () => {
    expect(isHexColor('#ABCDE')).toBe(false);
  });
});
