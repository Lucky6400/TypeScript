// type any

let playername: any = 'Cesc Fabregas'
playername = 3333333 // no error thrown because type is any

// type never
// throws error whenever defined
//let openingBatsman: never = "fefe" // throws error --> type string is not assignable to type never

// type unknown
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used, as shown in the below example:

let w: unknown = 1;
w = "string"; // no error

// type undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.