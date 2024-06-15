// Using generics for type safety
function processInput<T>(data: T): T {
    // Perform some operation
    return data;
}

function getUserInput(): string {
    return "my string";
}


let userInput: string = getUserInput();
let processedData = processInput<string>(userInput); // Type safety maintained
