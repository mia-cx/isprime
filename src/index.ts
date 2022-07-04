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
 * @param {number} n number to check whether it is a prime number
 * @returns {boolean} true if n is a prime number, false otherwise
 */
export default function isPrime(
  n: number,
  options: { useWorkers: boolean } = { useWorkers: false }
): boolean {
  switch (n) {
    case 1:
      // console.debug("1 is not prime");
      return false;
    case 2 | 3:
      // console.debug("2 & 3 are prime");
      return true;
    default:
      if (n % 2 === 0) {
        // console.debug(`${n} is even, not prime`);
        return false;
      }
      if (cache.has(n)) {
        return cache.get(n)!;
      }

      const SQUARE_ROOT = Math.floor(Math.sqrt(n));

      let prime = true;

      let i = 5;

      if (options.useWorkers) {
        // TODO workers
      } else {
        while (prime && i <= SQUARE_ROOT) {
          if (isDivisible(n, i)) prime = false;
          i++;
        }
      }

      cache.set(n, prime);
      // console.log(`${n} is ${!prime ? "not" : ""} prime`);
      return prime;
  }
}

export function isDivisible(n: number, o: number) {
  let divisible = false;
  if (n % o === 0) {
    // console.debug(`${n} is divisible by ${i}, not prime`);
    divisible = true;
  }
  return divisible;
}
