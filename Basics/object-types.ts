const player: { name: string, shirtNo: number } = {
    name: "Diego Costa",
    shirtNo: 19
}

// type inference
const car = {
    type: "Toyota",
};
car.type = "Ford"; // no error
car.type = 2; // throws error

// Optional properties
// using '?' before ':' we can make property optional 
const player01: { name: string, age?: number} = {
    name: "Eden Hazard"
}

// Index signatures
// Index signatures can be used for objects without a defined list of properties.

const chelsea: { [index: string]: string /* this defines the type of properties */} = {};

chelsea.attacker = "Diego Costa"
chelsea.defender = "John Terry"
chelsea.noOfPlayers = 11 // throws error