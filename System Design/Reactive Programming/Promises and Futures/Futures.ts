/*
Similar to Promises, a Future represents an asynchronous computation or task that may resolve or fail. They are created in the same manner as Promises as they accept a resolve and reject callbacks. However, the principal difference between them is that a Promise is eager, and it will try to evaluate as soon as it gets created or invoked. A Future, on the other hand, is lazy and will not evaluate once created.A Future is an object that does not run until you call a special method called fork or run, depending on the implementation. You can chain Future objects together and save them in a variable before calling the fork method. Once you call this method, you cannot chain anything else afterward. Instead, you get back a Cancel function that you can use to abort the task.TypeScript does not offer a native implementation of Future, but we can create a simple one for our purposes
*/

import { noop } from "lodash";

type Reject<TResult = never> = (reason?: any) => void;
type Resolve<TResult = never> = (t: TResult) => void;
type Execution<E, T> = (
    resolve: (val: T) => void,
    reject: (reason?: any) => void
) => () => void;

/* The main difference here with Promise is that it returns thunk () => void, which is used for cancellation purposes */

class Future<E, T> {
    private fn: Execution<E, T>;

    constructor(ex: Execution<E, T>) {
        this.fn = ex;
    }

    fork(reject: Reject<E>, resolve: Resolve<T>): () => void {
        return this.fn(reject, resolve);
    }

    static success<E, T>(t: T): Future<E, T> {
        return new Future((reject: Reject<E>, resolve: Resolve<T>) => {
            resolve(t);
            return noop;
        });
    }

    static fail<E, T>(err: E): Future<E, T> {
        return new Future((reject: Reject<E>, resolve: Resolve<T>) => {
            reject(err); return noop;
        });
    }

    then<A>(f: (t: T) => Future<E, T>): Future<E, T> {
        return new Future((reject: Reject<E>, resolve: Resolve<T>) => {
            return this.fn((err) => reject(err), (a: T) => f(a).fork(reject, resolve));
        });
    }
}

const task = new Future<Error, string>((reject, resolve: Resolve<string>) => {
    const v = setTimeout(() => resolve("Result"), 1000);
    return () => clearTimeout(v);
}).then((value: string) => {
    return Future.success(value.toUpperCase());
});

const cancelTask = task.fork((err) => console.error(err), (result) => console.warn('Task Success: ${result}'));


/*
We create a Future task in a similar way to a Promise by passing resolve and reject callbacks. We also chained one call to perform an uppercase conversion of the result of the previous Future. Once saved in the task variable, it's not executed immediately. You will need to call the fork method to pass the callbacks for the error and the successful results. You will get back a cancellation function that you can use to abort the Future task. This is handy as native Promises do not offer the possibility to cancel the tasks altogether.
*/