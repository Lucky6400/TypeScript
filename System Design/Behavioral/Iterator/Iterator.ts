export interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

export class ListNode<T> {
    public next: ListNode<T>;
    public data: T;

    constructor(next: ListNode<T>, data: T) {
        this.data = data;
        this.next = next;
    }
}

export class ListIterator<T> implements Iterator<T> {
    private root: ListNode<T>;

    constructor(root: ListNode<T> | null) {
        this.root = root;
    }

    next(): T | null {
        try {

            if (this.hasNext()) {
                const data = this.root!.data;
                this.root = this.root!.next;
                return data;
            }
            return null;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
    hasNext(): boolean {
        return this.root !== null;
    }
}

export class ListAggregate<T> {
    private rootList: ListNode<T>;
    constructor(rootList: ListNode<T>) {
        this.rootList = rootList;
    }
    getListIterator(): ListIterator<T> {
        return new ListIterator(this.rootList);
    }
}

const list = new ListNode(new ListNode(new ListNode(null, 10),
    5), 15);
const aggregate = new ListAggregate(list);
const iterator = aggregate.getListIterator();

while (iterator.hasNext()) {
    console.log(iterator.next()); // prints 15, 5, 10
}