// Refactored code to avoid Class Overuse

interface Calculator {
    add(value: number, num: number): number;
    subtract(value: number, num: number): number;
    multiply(value: number, num: number): number;
    divide(value: number, num: number): number;
}

const calculator: Calculator = {
    add: (value, num) => value + num,
    subtract: (value, num) => value - num,
    multiply: (value, num) => value * num,
    divide: (value, num) => value / num,
};

interface User {
    name: string;
    age: number;
}

function createUser(name: string, age: number): User {
    return { name, age };
}

// Usage
console.log(calculator.add(10, 5)); // Output: 15

const user = createUser("John", 30);
console.log(user.name); // Output: John
console.log(user.age); // Output: 30
