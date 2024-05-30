/*
Liskov Substitution Principle

If S is a declared subtype of T, objects of type S should behave as objects of type T are expected to behave, if they are treated as objects of type T.

The Liskov substitution principle relates to when passing objects or interfaces as parameters. It states that given an object parameter, we should be able to pass subclasses of that object without changing the behavior of the program.

*/

interface Bag<T> {
    push(item: T);
    pop(): T | undefined;
    isEmpty(): boolean;
}

// This class adheres to the principle
class Stack<T> implements Bag<T> {
    constructor(private items = []) { };

    push<T>(item: T) { 
        this.items.push(item);
    };

    pop(): T | undefined {
        if (this.items.length > 0) { return this.items.pop(); }
        return undefined;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// This class violates the principle because this bag implementation introduces a side effect as it makes sure that it always contains one last element. Thus, isEmpty() will always return false. 
class NonEmptyStack<T> implements Bag<T> {
    private tag: any = Symbol();

    constructor(private items: T[] = []) {
        if (this.items.length == 0) {
            this.items.push(this.tag);
        }
    }

    push(item: T) { this.items.push(item); }

    pop(): T | undefined {
        if (this.items.length === 1) {
            const item = this.items.pop(); this.items.push(this.tag); return item;
        }
        if (this.items.length > 1) {
            return this.items.pop();
        }
        return undefined;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}