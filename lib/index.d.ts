export declare const WHEEL_PRIMES: {
    "11": boolean;
    "13": boolean;
    "17": boolean;
    "19": boolean;
    "23": boolean;
    "29": boolean;
    "31": boolean;
    "37": boolean;
    "41": boolean;
    "43": boolean;
    "47": boolean;
    "53": boolean;
    "59": boolean;
    "61": boolean;
    "67": boolean;
    "71": boolean;
    "73": boolean;
    "79": boolean;
    "83": boolean;
    "89": boolean;
    "97": boolean;
    "101": boolean;
    /**
     * checks whether a number is a prime number, using trial division
     * @param n number to check
     * @param options options for optimization (and multithreading when added)
     * @returns true if n is a prime number
     */
    "103": boolean;
    "107": boolean;
    "109": boolean;
    "113": boolean;
    "127": boolean;
    "131": boolean;
    "137": boolean;
    "139": boolean;
    "149": boolean;
    "151": boolean;
    "157": boolean;
    "163": boolean;
    "167": boolean;
    "173": boolean;
    "179": boolean;
    "181": boolean;
    "191": boolean;
    "193": boolean;
    "197": boolean;
    "199": boolean;
    "211": boolean;
};
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
