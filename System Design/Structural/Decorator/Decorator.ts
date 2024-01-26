import { Cricketer } from "./typings";

export class Batsman implements Cricketer {
    public groundedShot(runs: number): void {
        runs === 4 ? console.log("A powerful shot for four.") : console.log("He just pushes it for " + runs + " runs.")
    }

}

export class BatsmanDecorator implements Cricketer {

    constructor(private cricketer: Cricketer) {
        this.cricketer = cricketer;
    }

    // we wanted to add a check for runs but we did not want to modify existing class, hence we used this decorator.
    public groundedShot(runs: number): void {
        if(runs > 4) return undefined;
        this.cricketer.groundedShot(runs);
    }
}

const batsman = new Batsman();
const batDec = new BatsmanDecorator(batsman);
batDec.groundedShot(4);
batDec.groundedShot(6);
batDec.groundedShot(2);
