// TODO workers
// import workerpool from "workerpool";
// import worker from "./worker";

// workerpool.worker({
//   worker: worker,
// });

// export const pool = workerpool.pool(__dirname + "worker.ts");

import wheel from "./wheel.json";
export const WHEEL_PRIMES = wheel;

export const cache: Map<number, boolean> = new Map();

/**
 * checks whether a number is a prime number, using trial division
 * @param n number to check
 * @param options options for optimization (and multithreading when added)
 * @returns true if n is a prime number
 */
export default function isPrime(
  n: number,
  options: { /* useWorkers: boolean;*/ useCache: boolean } = {
    /*useWorkers: false,*/
    useCache: true,
  }
): boolean {
  // check whether n is an integer
  if (Math.floor(n) !== n) {
    return false;
  }

  // check whether n is positive
  if (n <= 3) {
    return n > 1; // primes: 2, 3
  }

  // check whether n is even
  if (n % 2 === 0) {
    return false;
  }

  // check for small primes
  if (n < 9) {
    return true; // primes: 5, 7
  }

  // check whether the number is a prime number in the wheel
  if (WHEEL_PRIMES[`${n}` as keyof typeof WHEEL_PRIMES]) {
    return true;
  }

  if (cache.has(n)) {
    return cache.get(n)!;
  }

  const SQUARE_ROOT = Math.floor(Math.sqrt(n));

  let prime = true;

  let i = 11;

  // if (options.useWorkers) {
  //   // TODO workers
  // } else {
  while (prime && i <= SQUARE_ROOT) {
    if (
      n % i === 0 || // 11
      n % (i + 2) === 0 || // 13
      n % (i + 6) === 0 || // 17
      n % (i + 8) === 0 || // 19
      n % (i + 12) === 0 || // 23
      n % (i + 18) === 0 || // 29
      n % (i + 20) === 0 || // 31
      n % (i + 26) === 0 || // 37
      n % (i + 30) === 0 || // 41
      n % (i + 32) === 0 || // 43
      n % (i + 36) === 0 || // 47
      n % (i + 42) === 0 || // 53
      n % (i + 48) === 0 || // 59
      n % (i + 50) === 0 || // 61
      n % (i + 56) === 0 || // 67
      n % (i + 60) === 0 || // 71
      n % (i + 62) === 0 || // 73
      n % (i + 68) === 0 || // 79
      n % (i + 72) === 0 || // 83
      n % (i + 78) === 0 || // 89
      n % (i + 86) === 0 || // 97
      n % (i + 90) === 0 || // 101
      n % (i + 92) === 0 || // 103
      n % (i + 96) === 0 || // 107
      n % (i + 98) === 0 || // 109
      n % (i + 102) === 0 || // 113
      n % (i + 110) === 0 || // 121 (relatively prime)
      n % (i + 116) === 0 || // 127
      n % (i + 120) === 0 || // 131
      n % (i + 126) === 0 || // 137
      n % (i + 128) === 0 || // 139
      n % (i + 132) === 0 || // 143 (relatively prime)
      n % (i + 138) === 0 || // 149
      n % (i + 140) === 0 || // 151
      n % (i + 146) === 0 || // 157
      n % (i + 152) === 0 || // 163
      n % (i + 156) === 0 || // 167
      n % (i + 158) === 0 || // 169 (relatively prime)
      n % (i + 162) === 0 || // 173
      n % (i + 168) === 0 || // 179
      n % (i + 170) === 0 || // 181
      n % (i + 176) === 0 || // 187 (relatively prime)
      n % (i + 180) === 0 || // 191
      n % (i + 182) === 0 || // 193
      n % (i + 186) === 0 || // 197
      n % (i + 188) === 0 || // 199
      n % (i + 198) === 0 || // 209 (relatively prime)
      n % (i + 200) === 0 // 211
    ) {
      prime = false;
    }
    i += 210;
  }
  // }

  cache.set(n, prime);
  // console.log(`${n} is ${!prime ? "not" : ""} prime`);
  return prime;
}

/**
 * checks whether a number is divisible by another number
 * @param n number to check
 * @param o number to check against
 * @returns true, if n is divisible by o
 */
export function isDivisible(n: number, o: number): boolean {
  let divisible = false;
  if (n % o === 0) {
    // console.debug(`${n} is divisible by ${i}, not prime`);
    divisible = true;
  }
  return divisible;
}
