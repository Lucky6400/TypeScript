import { chain } from "lodash";

const cricketers = [
    { name: "Ganguly", avg: 35 },
    { name: "Dravid", avg: 37 },
    { name: "Sehwag", avg: 42 },
    { name: "Sachin", avg: 47 },
];

const result = chain(cricketers).sortBy("avg").head().value();
console.log(result);