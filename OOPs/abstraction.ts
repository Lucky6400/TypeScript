// Classes can be written in a way that allows them to be used as a base class for the other classes without having to implement all the members. 'abstract' keyword is used to achieve this.
/*
 In TypeScript, an abstract class is a class that cannot be instantiated directly. It is meant to be subclassed by other classes, and it may contain abstract methods. Abstract classes provide a way to define a common structure for a group of related classes while allowing some methods to be implemented by the subclasses.
*/
/* Members that are left unimplemented also use abstract keyword */

// Remove 'abstract' keyword below to see difference

abstract class PremierLeague {
    public abstract getShirtNumber(): number;

    public getPosition(): string {
        return `${this.getShirtNumber} plays as CST.`
    }
}

class Chelsea extends PremierLeague {
    public constructor(protected readonly name: string) {
        super();
    }

    public getShirtNumber(): number {
        return this.name === 'Diego Costa' ? 19 : 10
    }
}

const chelsea = new Chelsea('Diego Costa');

console.log(chelsea.getShirtNumber());