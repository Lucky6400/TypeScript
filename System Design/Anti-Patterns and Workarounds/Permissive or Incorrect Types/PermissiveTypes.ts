// Anti-pattern: Using 'any' type excessively

function getUserInput(): any {
    return this as any;
}

// Function that accepts any type of argument
function processInput(data: any) {
    // Perform some operation
    return data;
}

let userInput: any = getUserInput(); 

let processedData = processInput(userInput); // No type safety or checking
