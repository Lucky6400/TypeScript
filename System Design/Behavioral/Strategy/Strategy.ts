interface Strategy {
    play(): void;
}

class StrategyForGermany implements Strategy {
    play(): void {
        console.log(`
        Formation: 4-3-3
        Substitution: Late
        GamePlan: Possession
        `)
    }
}

class StrategyForItaly implements Strategy {
    play(): void {
        console.log(`
        Formation: 4-3-3
        Substitution: Flexible
        GamePlan: Counter Attack
        `)
    }
}

class StrategyContext {
    private strategy: Strategy;

    constructor() {

    }

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    playGame(): void {
        this.strategy.play();  
    }
}


const strategy = new StrategyContext();
strategy.setStrategy(new StrategyForGermany());
strategy.playGame();
