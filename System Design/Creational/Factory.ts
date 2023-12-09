/*
A factory method is a method of a factory that builds objects. Take building rockets as an
example; a factory method could be a method that builds either the entire rocket or a single
component. One factory method might rely on other factory methods to build its target
object. For example, if we have a createRocket method under the Rocket class, it would
probably call factory methods like createStages and createPayload to get the necessary
components.

The Factory Method Pattern provides some flexibility upon reasonable complexity. It allows
extendable usage by implementing (or overriding) specific factory methods. Taking
createStages method, for example, we can create a one-stage rocket or a two-stage rocket
by providing different createStages method that return one or two stages respectively.

?Pattern scope
The Factory Method Pattern decouples Rocket from the constructor implementation and
makes it possible for subclasses of a factory to change what's built accordingly. A concrete
creator still cares about what exactly its components are and how they are built. But the
implementation or overriding usually focuses more on each component, rather than the
entire product.
*/

// Payload class represents the payload of the rocket.
class Payload {
    weight: number;

    constructor(weight: number) {
        this.weight = weight;
    }
}

// Engine class represents a rocket engine with a specific thrust.
class Engine {
    thrust: number;

    constructor(thrust: number) {
        this.thrust = thrust;
    }
}

// Stage class represents a stage of the rocket with an array of engines.
class Stage {
    engines: Engine[];

    constructor(engines: Engine[]) {
        this.engines = engines;
    }
}

// Rocket class represents the overall structure of a rocket.
class Rocket {
    payload: { weight: number };
    stages: { engines: Engine[] }[];

    constructor() { }
}

// RocketFactory is an abstract class defining the Factory Design Pattern.
// It provides a way to create different components of a Rocket.
class RocketFactory {
    // buildRocket is the Factory Method. It defines the process of creating a Rocket.
    // Subclasses can override this method to create rockets with different specifications.
    buildRocket(): Rocket {
        const rocket = this.createRocket(); // Creating a new Rocket instance
        const payload = this.createPayload(); // Creating a payload for the rocket
        const stages = this.createStages(); // Creating stages for the rocket
        rocket.payload = payload; // Assigning the payload to the rocket
        rocket.stages = stages; // Assigning the stages to the rocket
        return rocket; // Returning the assembled rocket
    }

    // createPayload is a factory method responsible for creating a default payload.
    // Subclasses can override this method to provide different payload types.
    createPayload(): Payload {
        return new Payload(0); // Default payload creation
    }

    // createStages is a factory method responsible for creating default rocket stages.
    // Subclasses can override this method to provide different stages configurations.
    createStages(): Stage[] {
        const engineOne = new Engine(2000);
        const engineTwo = new Engine(3000);
        const stage = new Stage([engineOne, engineTwo]);
        return [stage]; // Default stages creation
    }

    // createRocket is an abstract factory method. Subclasses must provide their own implementation.
    // This method is responsible for creating the base Rocket instance.
    createRocket(): Rocket {
        return new Rocket();
    };
}

// Instance of RocketFactory to build rockets.
const rocketFactory = new RocketFactory();
const myRocket = rocketFactory.buildRocket(); // Using the factory method to build a rocket

console.log(myRocket);

// Satellite class extends Payload and represents a payload specific to satellites.
class Satellite extends Payload {
    constructor(public id: number) {
        super(200);
    }
}

// StageOne class extends Stage and represents the first stage of a freight rocket.
class StageOne extends Stage {
    constructor() {
        super([
            new Engine(1200),
            new Engine(3200),
            new Engine(4400)
        ])
    }
}

// StageTwo class extends Stage and represents the second stage of a freight rocket.
class StageTwo extends Stage {
    constructor() {
        super([
            new Engine(2100),
            new Engine(3500)
        ])
    }
}

// FreightRocketStages type represents the stages of a freight rocket.
type FreightRocketStages = [StageOne, StageTwo];

// FrieghtRocketFactory class extends RocketFactory and is specialized for creating freight rockets.
class FrieghtRocketFactory extends RocketFactory {
    satelliteId: number = 0;

    // createPayload is overridden to create a Satellite payload with a unique ID.
    createPayload(): Satellite {
        return new Satellite(this.satelliteId++);
    }

    // createStages is overridden to create stages specific to a freight rocket.
    createStages(): FreightRocketStages {
        return [new StageOne(), new StageTwo()];
    }
}

// Instance of FrieghtRocketFactory to build freight rockets.
const freightRocketFactory = new FrieghtRocketFactory();
const myFreightRocket = freightRocketFactory.buildRocket(); // Using the factory method to build a freight rocket

console.log(myFreightRocket);


/*
?Consequences
In the preceding implementation, the factory method buildRocket handles the outline of
the building steps. We were lucky to have the freight rocket in the same structure as the
very first rocket we had defined.
But that won't always happen. If we want to change the class of products (Rocket), we'll
have to override the entire buildRocket with everything else but the class name. This
looks frustrating but it can be solved, again, by decoupling the creation of a rocket instance
from the building process.
*/