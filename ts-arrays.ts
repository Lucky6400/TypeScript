const players: string[] = ["Mikel", "Terry", "Willian", "Hazard", "Cech", "Drogba"]
players.push("Diego Costa")
//players.push(3) // Argument of type 'number' is not assignable to parameter of type 'string'.

// inference
// typescript will infer type if the arrayhas values 
const runs = [22, 33, 44, 55, 66]
runs.push(100)
// runs.push("No run") //Argument of type 'string' is not assignable to parameter of type 'number'.


// readonly

let goals: readonly number[] = [3,4,5]
goals.push(4) // throws error: property push does not exist on readonly type