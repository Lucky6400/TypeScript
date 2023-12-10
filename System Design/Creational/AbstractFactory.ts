/*
The Abstract Factory Pattern usually defines the interfaces of a collection of factory
methods, without specifying concrete products. This allows an entire factory to be
replaceable, in order to produce different products following the same production outline.

Different from the Factory Method Pattern, the Abstract Factory Pattern extracts another
part called client that take cares of shaping the outline of the building process. This makes
the factory part focused more on producing each component.
*/

interface Engine {
    thrust: number;
}

interface Payload {
    weight: number;
}

interface Stage {
    engines: Engine[];
}

interface Rocket {
    payload: Payload;
    stages: Stage[];
}

interface RocketFactory<T extends Rocket> {
    createRocket(): T;
    createPayload(): Payload;
    createStages(): Stage[];
}

class Client {
    buildRocket<T extends Rocket>(factory: RocketFactory<T>): T {
        const rocket = factory.createRocket();
        rocket.payload = factory.createPayload();
        rocket.stages = factory.createStages();

        return rocket;
    }
}

class ExperimentalRocket implements Rocket {
    payload: Payload;
    stages: Stage[];
    color: string;
}

class ExperimentalRocketFactory implements RocketFactory<ExperimentalRocket> {
    createRocket(): ExperimentalRocket {
        const expRocket = new ExperimentalRocket();
        expRocket.payload = this.createPayload();
        expRocket.color = "Blue";
        expRocket.stages = this.createStages();
        return expRocket;
    };
    createPayload(): Payload {
        return {
            weight: 1000
        }
    };
    createStages(): Stage[] {
        const stageOne: Stage = {
            engines: [{
                thrust: 1200
            },
            {
                thrust: 1500
            }]
        };
        const stageTwo: Stage = {
            engines: [{
                thrust: 2200
            },
            {
                thrust: 2500
            }]
        }

        return [stageOne, stageTwo];
    };
}

// here we built a rocket by creating a different factory that uses same implementation of the original rocket. in this way we can create different factories and create different types of rockets.
const client = new Client();
const factory = new ExperimentalRocketFactory();
const rocket = client.buildRocket(factory);
console.log(rocket)

/*
The Abstract Factory Pattern makes it easy and smooth to change the entire family of
products. This is the direct benefit brought by the factory level abstraction.
*/