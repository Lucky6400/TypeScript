/*
The Adapter pattern deals with interfacing two different objects without changing their
implementation part. You want to call new object methods using an existing interface but
because they don't have something in common, you use a wrapper to connect them. Let's
understand this concept in detail.
An Adapter is like a wrapper. It wraps one object in a new structure or interface that can
be used in a client that expects that interface. This way, you can expand the usage of a
particular object and make it work across incompatible interfaces.
*/

import { FastBowling, SpinBowling } from "./typings";

export class FastBowler implements FastBowling {
    bowlFast(speed: number): string {
        return `Bowling Speed: ${speed}KPH`;
    }
}

export class SpinBowler implements SpinBowling {
    bowlSpin(speed: string): string {
        return `This spin bowler has ${speed}KPH avg speed.`
    }
}

export class Adapter implements FastBowling {
    spinBowler: SpinBowling;

    constructor(spinBowler: SpinBowling = new SpinBowler()) {
        this.spinBowler = spinBowler;
    }

    public bowlFast(speed: number): string {
        return this.spinBowler.bowlSpin(speed.toString());
    }
}

export class Client {
    fastBowler: FastBowling;

    call() {
        this.fastBowler = new FastBowler();
        console.log(this.fastBowler.bowlFast(151));
        this.fastBowler = new Adapter();
        console.log(this.fastBowler.bowlFast(75));
    }
}

const client = new Client();
client.call();
