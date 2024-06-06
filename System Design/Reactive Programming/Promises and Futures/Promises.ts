import axios from "axios"

/**
In this example, you create a new Promise object that accepts an executor function with two parameters – resolve and reject. Resolve is a callback function that you need to use when you want to return a successful response. Reject is the callback function that you need to use when you want to return a failed response.
*/
const dataFromApi = new Promise(async (res, rej) => {
    try {
        const res_1 = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
        const data = res_1.data;
        return res(data);
    } catch (err) {
        return rej(err);
    }
})

dataFromApi.then(res => console.log(res)).catch(err => console.log(err));

// other methods

function delay(ms: number = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function failAfter(ms: number = 1000) {
    return new Promise((_, reject) => setTimeout(reject, ms));
}

// whichever resolves first
const races = Promise.race([delay(1000), failAfter(500)]);

// concurrently resolve all
const all = Promise.all([delay(1000), failAfter(1500)]);

(async () => {
    races.then((value) => {
        console.log(value);
    }).catch((_) => {
        console.log("Error");
    });
})();

(async () => {
    all.then((value) => {
        console.log(value);
    }).catch((_) => {
        console.log("Error");
    });
})();
