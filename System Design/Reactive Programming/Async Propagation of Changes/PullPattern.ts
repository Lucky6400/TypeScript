/* With the Pull pattern, the consumer of the data needs to proactively query the source for updates and react based on any new information. This means that they have to poll the producer periodically for any value changes. */

export interface AsyncRequest<T> {
    success: boolean;
    data?: T;
}

export async function asyncPoll<T>(
    fn: () => PromiseLike<AsyncRequest<T>>,
    pollInterval = 5 * 1000,
    pollTimeout = 30 * 1000
): Promise<T> {
    const end = new Date().getTime() + pollTimeout;
    const condition = (resolve: Function, reject: Function): void => {
        Promise.resolve(fn()).then(res => {
            const now = new Date().getTime();
            if (res.success) resolve(res.data);
            else if (now < end) setTimeout(condition, pollInterval, resolve, reject);
            else reject(new Error("Reques timed out!"))
        }).catch(err => reject(err));
    }

    return new Promise(condition);
}

/*
The asyncpoll function accepts another function parameter named fn that will periodically call it and resolve its results. If the result is something that the client is interested in, then Promise resolves. If, after some time, the poll exceeds the timeout, then Promise rejects.
*/

const result = asyncPoll(async () => {
    try {
        const result = await Promise.resolve({ data: "Value" });
        if (result.data) return Promise.resolve({ success: true, data: result });
        else return Promise.resolve({ success: false });

    } catch (error) {
        return Promise.reject(error)
    }
})

result.then(res => console.log(res.data)).catch(err => console.log(err));

/*
This is an example of pulling information in an asynchronous manner and then stopping. You could also have a situation where you have an iterator that you need to pull periodically.
*/