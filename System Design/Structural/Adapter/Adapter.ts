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
