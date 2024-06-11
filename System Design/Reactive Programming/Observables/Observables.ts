/*
An observable represents a sequence that is invokable and produces future values or events. The idea is that you create an observable object and you add observers to it for receiving future values. Once the observable pushes a value, observers will receive them at some point.

These are built upon the Observer pattern. However, this pattern worked specifically with classes and its scope was limited. Observables, on the other hand, try to expand the idea of composing asynchronous and event-based programs that react based on changes.
*/

import { from, interval, Observable, of, share, take } from "rxjs";

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

randomValues.subscribe(x => console.log(x));


// till now we were creating the cold observables. Now we will create a hot observable

/*
Hot observable means when the producer emits data at a certain point irrespective of any subscriber list.
Cold observable remains inactive until subscribed to.
*/

const streams = interval(1000).pipe(take(5), share());

streams.subscribe(x => console.log("Val accepted from first subscriber ", x));

setTimeout(() => {
    streams.subscribe(v => console.log("Val accepted from second subscriber ",v));
}, 3000);