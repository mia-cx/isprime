import isPrime, { cache } from "../index";

const testValue = 45413;

test("test 1355", () => {
  expect(isPrime(1355)).toBe(false);
});

test("initial cache empty.", () => {
  cache.clear();
  expect(cache.size).toBe(0);
});

test(`test prime for ${testValue}.`, () => {
  let prime = isPrime(testValue);

  expect(prime).toBe(true);
});

test(`cached number ${testValue}, as true.`, () => {
  expect(cache.size).toBe(1);

  let hasTestValue = cache.has(testValue);

  expect(hasTestValue).toBe(true);
  let prime = cache.get(testValue);

  expect(cache.get(testValue)).toBe(true);
});

test(`test prime for ${testValue} (cached).`, () => {
  let prime = isPrime(testValue);

  expect(prime).toBe(true);
});

test("clear cache", () => {
  cache.clear();

  expect(cache.size).toBe(0);
});

const testAmount: number = 10000;

test(`test prime for integers under ${testAmount}`, () => {
  let i = testAmount;

  while (i) {
    isPrime(i);
    i--;
  }
});

test(`test prime for integers under ${testAmount} (cached).`, () => {
  let i = testAmount;

  while (i) {
    isPrime(i);
    i--;
  }
  cache.clear();
});
