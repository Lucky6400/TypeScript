export interface Flyweight {
    perform(customization: { id: string }): void;
}

export class ConcreteFlyweight implements Flyweight {
    private sharedState: Object;

    constructor(sharedState: Object) {

    }

    perform(customization: { id: string; }): void {
        console.log(`
        Concrete Flyweight with ${customization.id} called!
        `);
    }

}

export class FlyweightFactory {
    private cache = new Map<Object, Flyweight>();

    public create(sharedState: Object): Flyweight {
        if (!this.cache.has(sharedState)) {
            this.cache.set(sharedState, new ConcreteFlyweight(sharedState));
        }

        return this.cache.get(sharedState);
    }
}

const client = new FlyweightFactory().create({ state: "initial" }).perform({ id: "90y3h4i0ro" });
