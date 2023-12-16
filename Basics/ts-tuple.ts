/*
A tuple is a typed array with a pre-defined length and types for each index.
Tuples are great because they allow each element in the array to be a known type of value.
To define a tuple, specify the type of each element in the array:
*/

let playerTuple: [number, string, boolean]

playerTuple = [19, "Diego Costa", true]

// readonly tuple
let defenders: readonly [string, string] = ["Ivanovic", "Cahill"]