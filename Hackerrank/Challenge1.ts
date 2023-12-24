'use strict';

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

function main() {
    // Enter your code here
    const a: number = parseInt(readLine().trim(), 10);
    const b: number = parseInt(readLine().trim(), 10);

    function solveMeFirst(a: number, b: number): void {
        console.log(a + b);
    }

    solveMeFirst(a, b);

}