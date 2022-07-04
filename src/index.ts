// TODO workers
// import workerpool from "workerpool";
// import worker from "./worker";

// workerpool.worker({
//   worker: worker,
// });

// export const pool = workerpool.pool(__dirname + "worker.ts");

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
  switch (n) {
    case 1:
      return false;
    case 2 | 3:
      return true;
    default:
      if (n % 2 === 0) {
        return false;
      }
      if (cache.has(n)) {
        return cache.get(n)!;
      }

      const SQUARE_ROOT = Math.floor(Math.sqrt(n));

      let prime = true;

      let i = 5;

      // if (options.useWorkers) {
      //   // TODO workers
      // } else {
      while (prime && i <= SQUARE_ROOT) {
        if (isDivisible(n, i)) prime = false;
        i++;
      }
      // }

      cache.set(n, prime);
      // console.log(`${n} is ${!prime ? "not" : ""} prime`);
      return prime;
  }
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
