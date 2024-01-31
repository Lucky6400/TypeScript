/*
Façade is a pattern that also wraps one or more interfaces and hides the complexities of
using complex workflows under a simpler interface.

When you have some workflows that need to be orchestrated in a specific manner,
such as calling one service and then the other under certain criteria, it's quite tricky
to bring this logic across your components every time. With this pattern, you hide all
those complexities behind an API and offer a simpler, more readable way to call those
workflows. In simple terms, you use a function to wrap many service calls together so that
the client will call it with fewer parameters.

One analogy of this pattern is having a smartphone, and you have to type the number you
want to call. Instead of calling the number by typing it, you use quick actions to obtain
a number from a list and you call the number when you tap on the quick action button.
Although you can still manually enter the numbers, the UI Façade can carry out this
process for you in one go. Let's explore when you will have to use this pattern in practice.
*/

import { Batsman, Bowler } from "./typings";

export class OpeningBatsman implements Batsman {
    playShot(): void {
        console.log("He hits the first ball for four!")
    }
}

export class OpeningBowler implements Bowler {
    bowl(): void {
        console.log("Bowled him! He takes the wicket off his first ball.")
    }

}

export class AllRounder {
    private batsman: Batsman;
    private bowler: Bowler;

    constructor(batsman: Batsman, bowler: Bowler) {
        this.batsman = batsman;
        this.bowler = bowler;
    }

    play(): void {
        this.batsman.playShot();
        this.bowler.bowl();
    }
}

const allrounder = new AllRounder(new OpeningBatsman(), new OpeningBowler());
allrounder.play();