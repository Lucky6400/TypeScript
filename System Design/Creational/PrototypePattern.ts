/*
A Prototype is a kind of object that takes its initial state and properties out of existing
objects. The main idea is to avoid having to manually create an object and assign
properties to it from another object.
*/

const person = {
    name: "",
    age: 0,
    gender: "",
    greet: function () {
        console.log("Hello, I'm " + this.name);
    },
    introduce: function () {
        console.log("My name is " + this.name + ", I'm " + this.age + " years old, and I'm " + this.gender);
    }
};

const alice = Object.create(person); // create a new object using the person prototype
alice.name = "Alice"; // assign some values to the properties
alice.age = 25;
alice.gender = "female";



// implementation of Prototype pattern

interface CricketerPrototype {
    clone(): CricketerPrototype;
    introduce(): void;
}

class AjitAgarkar implements CricketerPrototype {
    private bowlingSpeed: number;
    private ratingBowl: number;
    private ratingBat: number;
    constructor(bowlingSpeed: number, ratingBowl: number, ratingBat: number) {
        this.bowlingSpeed = bowlingSpeed;
        this.ratingBat = ratingBat;
        this.ratingBowl = ratingBowl;
    }
    clone(): AjitAgarkar {
        const cloned = Object.create(AjitAgarkar.prototype || null);
        Object.getOwnPropertyNames(this).map((key: string) => {
            cloned[key] = this[key];
        })
        return cloned
    }

    public introduce(): void {
        console.log(`
        Ajit Agarkar: India Cricketer
        Bowling Speed: ${this.bowlingSpeed}
        Batting Rating: ${this.ratingBat}
        Bowling Rating: ${this.ratingBowl}
        `)
    }
}

class RobinUtthappa implements CricketerPrototype {
    private strikeRate: number;
    private ratingBat: number;
    constructor(strikeRate: number, ratingBat: number) {
        this.strikeRate = strikeRate;
        this.ratingBat = ratingBat;
    }
    clone(): RobinUtthappa {
        const cloned = Object.create(RobinUtthappa.prototype || null);
        Object.getOwnPropertyNames(this).map((key: string) => {
            cloned[key] = this[key];
        })
        return cloned
    }

    public introduce(): void {
        console.log(`
        Robin Utthappa: India Cricketer
        Strike Rate: ${this.strikeRate}
        Batting Rating: ${this.ratingBat}
        `)
    }
}

const ajitA: CricketerPrototype = new AjitAgarkar(145, 91, 75);
const robinU: CricketerPrototype = new RobinUtthappa(130, 85);

ajitA.clone().introduce();
robinU.clone().introduce();

/*
Now, the derived object will keep the state of the base object. This could be useful when
you want to create copies of a specific instance, but keep in mind that properties in a
prototype of these copies are not the own properties of these cloned objects.
*/