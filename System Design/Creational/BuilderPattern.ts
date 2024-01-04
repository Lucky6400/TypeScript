/*
Builder Pattern encapsulates components by exposing only the building steps and
provides the final products directly. At the same time, the Builder Pattern also encapsulates
the internal structures of a product. This makes it possible for a more flexible abstraction
and implementation of building complex objects.

?Pattern scope
The Builder Pattern has a similar scope to the Abstract Factory Pattern, which extracts
abstraction from a complete collection of operations that will finally initiate the products.
Compared to the Abstract Factory Pattern, a builder in the Builder Pattern focuses more on
the building steps and the association between those steps, while the Abstract Factory
Pattern puts that part into the clients and makes its factory focus on producing components.

*/

class Engine {
    thrust: number;

    constructor(thrust: number) {
        this.thrust = thrust;
    }
}

interface Stage {
    engines: Engine[];
}

interface Payload {
    weight: number;
}

interface Rocket {
    payload: Payload;
}

class Probe implements Payload {
    weight: number;
}

class SolidRocketEngine extends Engine {
    constructor(weight: number, thrust: number) {
        super(weight);
        this.thrust = thrust;
    }
}

class SoundingRocket implements Rocket {
    payload: Probe;
    engine: SolidRocketEngine;
}

class LiquidRocketEngine extends Engine {
    fuelLevel = 0;
    refuel(level: number): void {
        this.fuelLevel = level;
    }
}

abstract class LiquidRocketStage implements Stage {
    engines: LiquidRocketEngine[] = [];
    refuel(level = 100): void {
        for (let engine of this.engines) {
            engine.refuel(level);
        }
    }
}

class FreightRocketFirstStage extends LiquidRocketStage {
    constructor(thrust: number) {
        super();
        let enginesNumber = 4;
        let singleEngineThrust = thrust / enginesNumber;
        for (let i = 0; i < enginesNumber; i++) {
            let engine = new LiquidRocketEngine(singleEngineThrust);
            this.engines.push(engine);
        }
    }
}

class FreightRocketSecondStage extends LiquidRocketStage {
    constructor(thrust: number) {
        super();
        this.engines.push(new LiquidRocketEngine(thrust));
    }
}

type FreightRocketStages =
    [FreightRocketFirstStage, FreightRocketSecondStage];

class Satellite implements Payload {
    id: number;
    weight: number;
    constructor(id: number, weight: number) {
        this.id = id;
        this.weight = weight;
    }
}

class FreightRocket implements Rocket {
    payload: Satellite;
    stages = [] as unknown as FreightRocketStages;
}

/**
There's actually no abstract method in this abstract class. One of the
reasons is that specific steps might be optional to certain builders. By
implementing no-op methods, the subclasses can just leave the steps they
don't care about empty.
*/
abstract class RocketBuilder<
    TRocket extends Rocket,
    TPayload extends Payload
> {
    createRocket(): void { }
    addPayload(payload: TPayload): void { }
    addStages(): void { }
    refuelRocket(): void { }
    abstract get rocket(): TRocket;
}

class Director {
    prepareRocket<
        TRocket extends Rocket,
        TPayload extends Payload
    >(
        builder: RocketBuilder<TRocket, TPayload>,
        payload: TPayload
    ): TRocket {
        builder.createRocket();
        builder.addPayload(payload);
        builder.addStages();
        builder.refuelRocket();
        return builder.rocket;
    }
}

class SoundingRocketBuilder extends RocketBuilder<SoundingRocket, Probe> {
    private buildingRocket: SoundingRocket;
    createRocket(): void {
        this.buildingRocket = new SoundingRocket();
    }
    addPayload(probe: Probe): void {
        this.buildingRocket.payload = probe;
    }
    addStages(): void {
        let payload = this.buildingRocket.payload;
        this.buildingRocket.engine = new SolidRocketEngine(payload.weight, 1200);
    }
    get rocket(): SoundingRocket {
        return this.buildingRocket;
    }
}

class FreightRocketBuilder extends RocketBuilder<FreightRocket, Satellite> {
    private buildingRocket: FreightRocket;
    createRocket(): void {
        this.buildingRocket = new FreightRocket();
    }
    addPayload(satellite: Satellite): void {
        this.buildingRocket.payload = satellite;
    }
    get rocket(): FreightRocket {
        return this.buildingRocket;
    }

    static oneStageMax = 1000;
    static twoStagesMax = 2000;

    addStages(): void {
        let rocket = this.buildingRocket;
        let payload = rocket.payload;
        let stages = rocket.stages;
        stages[0] = new FreightRocketFirstStage(payload.weight * 4);
        if (payload.weight >= FreightRocketBuilder.oneStageMax) {
            stages[1] = new FreightRocketSecondStage(payload.weight);
        }
    }

    refuel(): void {
        let rocket = this.buildingRocket;
        let payload = rocket.payload;
        let stages = rocket.stages;
        let oneMax = FreightRocketBuilder.oneStageMax;
        let twoMax = FreightRocketBuilder.twoStagesMax;
        let weight = payload.weight;
        stages[0].refuel(Math.min(weight, oneMax) / oneMax * 100);
        if (weight >= oneMax) {
            stages[1]
                .refuel((weight - oneMax) / (twoMax - oneMax) * 100);
        }
    }
}

let director = new Director();
let soundingRocketBuilder = new SoundingRocketBuilder();
let probe = new Probe();
let soundingRocket = director.prepareRocket(soundingRocketBuilder, probe);
let freightRocketBuilder = new FreightRocketBuilder();
let satellite = new Satellite(0, 10000);
let freightRocket = director.prepareRocket(freightRocketBuilder, satellite);

console.log(soundingRocket);
console.log(freightRocket)

/*
?Consequences
As the Builder Pattern takes greater control of the product structures and how the building
steps influence each other, it provides the maximum flexibility by subclassing the builder
itself, without changing the director (which plays a similar role to a client in the Abstract
Factory Pattern).
*/


// Modern Implementation
export type Builder<T> = {
    [k in keyof T]-?: (arg: T[k]) => Builder<T>;
} & {
    build(): T;
};

export function ModelBuilder<T>(): Builder<T> {
    const built: Record<string, unknown> = {};
    const builder = new Proxy(
        {},
        {
            get(target, prop) {
                if ("build" === prop) {
                    return () => built;
                }
                return (x: unknown): unknown => {
                    built[prop.toString()] = x;
                    return builder;
                };
            },
        }
    );
    return builder as Builder<T>;
}

interface User {
    id: number;
    name: string;
    email: string;
}

const user = ModelBuilder<User>()
    .id(1)
    .name("Theo")
    .email("theo@example.com")
    .build();

console.log(user)