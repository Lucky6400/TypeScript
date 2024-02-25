// Define the List interface
export interface List<T> {
    add(element: T): void;
    remove(index: number): T;
    get(index: number): T;
    size(): number;
}

export class Node<T> {
    constructor(public element: T, public next: Node<T> | null = null) {}
}

// Define the ArrayList class
export class ArrayList<T> implements List<T> {
    private elements: T[];

    constructor() {
        this.elements = [];
    }

    add(element: T): void {
        this.elements.push(element);
    }

    remove(index: number): T {
        if (index < 0 || index >= this.size()) {
            throw new Error('Index out of bounds');
        }
        return this.elements.splice(index, 1)[0];
    }

    get(index: number): T {
        if (index < 0 || index >= this.size()) {
            throw new Error('Index out of bounds');
        }
        return this.elements[index];
    }

    size(): number {
        return this.elements.length;
    }
}

// define the LinkedList class
export class LinkedList<T> implements List<T> {
    private head: Node<T> | null = null;
    private _size = 0;

    add(element: T): void {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this._size++;
    }

    remove(index: number): T {
        if (index < 0 || index >= this.size()) {
            throw new Error('Index out of bounds');
        }
        let current = this.head;
        let previous: Node<T> | null = null;

        if (index === 0) {
            this.head = current!.next;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current!.next;
            }
            previous!.next = current!.next;
        }
        this._size--;
        return current!.element;
    }

    get(index: number): T {
        if (index < 0 || index >= this.size()) {
            throw new Error('Index out of bounds');
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        return current!.element;
    }

    size(): number {
        return this._size;
    }
}