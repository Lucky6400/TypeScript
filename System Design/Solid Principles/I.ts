/*
Interface Segregation Principle

"Clients should not be forced to depend upon interfaces that they don't use."

The interface segregation principle applies to interfaces. It states that when you define interfaces, you should make them as thin and as small as possible. If you want more extensibility, you can create new interfaces that derive from existing ones.

*/


interface Collection<T> {
    pushBack(item: T): void;
    popBack(): T;
    pushFront(item: T): void;
    popFront(): T;
    isEmpty(): boolean;
    insertAt(item: T, index: number): void;
    deleteAt(index: number): T | undefined;
}

/*
Obviously, the more methods you include in this interface, the more difficult it is to implement all of them. With TypeScript, you can mark some properties as optional with the question mark operator (?) but this doesn't hide the fact that this interface is very generic. If you ever want to provide more flexibility for the classes when implementing this Collection interface, you should break it apart into smaller interfaces
*/

interface Collection<T> {
    isEmpty(): boolean;
}
interface Array<T> extends Collection<T> {
    insertAt(item: T, index: number): void;
    deleteAt(index: number): T | undefined;
}
interface Stack<T> extends Collection<T> {
    pushFront(item: T): void;
    popFront(): T;
}
interface Queue<T> extends Collection<T> {
    pushBack(item: T): void;
    popFront(): T;
}
