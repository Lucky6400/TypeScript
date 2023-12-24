'use strict';

import { PathLike, WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar: number[]): bigint {
    // Write your code here
    let sum: bigint = BigInt(0);

    for (let i = 0; i < ar.length; i++) {
        let curr: bigint = BigInt(ar[i]);
        sum = sum + curr;
    }
    
    return sum;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] as PathLike);

    const arCount: number = parseInt(readLine().trim(), 10);

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result: bigint = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}
