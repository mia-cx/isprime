import WHEEL_PRIMES from "./wheel.json";
export { WHEEL_PRIMES };
export declare const cache: Map<number, boolean>;
/**
 * checks whether a number is a prime number, using trial division
 * @param n number to check
 * @param options options for optimization (and multithreading when added)
 * @returns true if n is a prime number
 */
export default function isPrime(n: number, options?: {
    useCache: boolean;
}): boolean;
/**
 * checks whether a number is divisible by another number
 * @param n number to check
 * @param o number to check against
 * @returns true, if n is divisible by o
 */
export declare function isDivisible(n: number, o: number): boolean;
