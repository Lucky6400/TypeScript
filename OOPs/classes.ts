// The members of a class (properties & methods) are typed using type annotations.

class Chelsea {
    centerForward: string = "Diego Costa"
}

let chelsea = new Chelsea();
let cf = chelsea.centerForward
console.log(cf)

/*
::There are three main visibility modifiers in TypeScript.

--> public - (default) allows access to the class member from anywhere
--> private - only allows access to the class member from within the class
--> protected - allows access to the class member from itself and any classes that inherit it.
*/

class Barcelona {
    private rst: string;

    public constructor(rst: string) {
        this.rst = rst; // this is instance of a class
    }

    public printName(): string {
        return this.rst;
    }
}

let barca = new Barcelona("Lionel Messi")

// console.log(barca.rst) ==> throws error
// console.log(barca.printName()) ==> works fine

// Private parameters

class ParisSaintGerman {
    constructor(private attacker: string) { }
}

// readonly

class Person {
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}
