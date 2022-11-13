// Generics allow creating 'type variables'. We do not need to explicitly define what types are being used.

// WITH FUNCTIONS

function getPlayerPosition<S, N>(name: S, shirtNo: N) {
    console.log(`${name} with shirt no. ${shirtNo} plays as mid fielder.`);
    return [name, String(shirtNo)];
}

getPlayerPosition('Diego Costa', 19)

/*

So here as you saw that S and N are the variables that were created by us. Now when we called the function with our desired arguements, types are assigned to them automatically.

~ Hover over function call on line no. 9 to see a surprise.

*/

// WITH CLASSES

class Chelsea<S, N>{
    private name: S;
    private shirtNo: N;

    public setValue(playerName: S, playerShirtNo: N) {
        this.name = playerName;
        this.shirtNo = playerShirtNo;
    }
    public getPlayerName(): S {
        return this.name
    }
    public getPlayerNumber(): N {
        return this.shirtNo
    }
}

const chelsea = new Chelsea();

chelsea.setValue('Diego Costa', 19);

console.log(chelsea.getPlayerName());
console.log(chelsea.getPlayerNumber());

// WITH TYPE ALIASES

type shirtNo<N> = N

let shirtNumber: shirtNo<number> = 19

// DEFAULT VALUE 

function writeDressColorOrCode<S = string>(colorOrCode: S) {
    console.log(colorOrCode)
}

writeDressColorOrCode(19) // type number is assigned

// EXTENDS

// Constraints can be added to generics to limit what's allowed. 

function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}