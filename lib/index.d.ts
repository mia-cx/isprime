export declare const cache: Map<number, boolean>;
/**
 * checks whether a number is a prime number, using trial division
 * @param {number} n number to check whether it is a prime number
 * @returns {boolean} true if n is a prime number, false otherwise
 */
export default function isPrime(n: number, options?: {
    useWorkers: boolean;
}): boolean;
export declare function isDivisible(n: number, o: number): boolean;
