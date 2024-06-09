/*
An observable represents a sequence that is invokable and produces future values or events. The idea is that you create an observable object and you add observers to it for receiving future values. Once the observable pushes a value, observers will receive them at some point.

These are built upon the Observer pattern. However, this pattern worked specifically with classes and its scope was limited. Observables, on the other hand, try to expand the idea of composing asynchronous and event-based programs that react based on changes.
*/

import { from, Observable, of } from "rxjs";

// To start with, you want to create a producer object that invokes future streams of data. There are several ways you can do that, starting with the observable object:

// from constant values or objects
of(1, 2, 3, 4, 5);
of({ id: 1, data: 'test' });

// from array of values
from([1, 2, 3, 4, 5]);

// from a promise
from(Promise.resolve("test data"));

function* getNextRandom() {
    yield Math.floor(Math.random() * 100);
}

// from a custom producer function
const randomValues = new Observable(sub => {
    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.next(4);
    setInterval(() => {
        sub.next(getNextRandom().next().value)
    }, 1000);
});


