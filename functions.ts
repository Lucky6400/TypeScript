// The type of the value returned by the function can be explicitly defined.

function printNumber(): number {
    // return "33" // throws error
    return 33 // works fine 🙂 
}

// void type ensures that function does not return anything

function nothingReturned(): void {
    console.log(`I have no value ☹️`)
}

// types for parameters

function multiply(a: number, b: number) {
    return a * b;
}

// optional parameters

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

// type alias (only for arrow functions)

type player = (name: string) => string

const printPlayer: player = (name) => name 