/*
It is generally recommended to always explicitly define the types of the variables or functions that we are using. Type inference works but many times it can create issues when you cannot imagine what type you are about to or should pass.
*/

function example(param: { value: "a" }) {
    return param;
}

const param = { value: "a", }; // widened to type const param: {value: string;}

// example(param); // fails to compile