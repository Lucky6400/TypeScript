// Example of Class Overuse Anti-pattern

class Calculator {
    constructor(private value: number) { }

    add(num: number): number {
        return this.value + num;
    }

    subtract(num: number): number {
        return this.value - num;
    }

    multiply(num: number): number {
        return this.value * num;
    }

    divide(num: number): number {
        return this.value / num;
    }
}

class User {
    constructor(private name: string, private age: number) { }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

// Usage
const calculator = new Calculator(10);
console.log(calculator.add(5)); // Output: 15

const user = new User("John", 30);
console.log(user.getName()); // Output: John
console.log(user.getAge()); // Output: 30
