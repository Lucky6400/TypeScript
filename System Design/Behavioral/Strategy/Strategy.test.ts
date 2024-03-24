import { StrategyForGermany, StrategyForItaly, StrategyContext } from './Strategy'; // adjust the import path as needed

describe('Strategy', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('StrategyForGermany should log correct strategy', () => {
        const strategy = new StrategyForGermany();
        strategy.play();
        expect(consoleSpy).toHaveBeenCalledWith(`
        Formation: 4-3-3
        Substitution: Late
        GamePlan: Possession
        `);
    });

    test('StrategyForItaly should log correct strategy', () => {
        const strategy = new StrategyForItaly();
        strategy.play();
        expect(consoleSpy).toHaveBeenCalledWith(`
        Formation: 4-3-3
        Substitution: Flexible
        GamePlan: Counter Attack
        `);
    });

    test('StrategyContext should use the correct strategy', () => {
        const context = new StrategyContext();
        context.setStrategy(new StrategyForGermany());
        context.playGame();
        expect(consoleSpy).toHaveBeenCalledWith(`
        Formation: 4-3-3
        Substitution: Late
        GamePlan: Possession
        `);

        context.setStrategy(new StrategyForItaly());
        context.playGame();
        expect(consoleSpy).toHaveBeenCalledWith(`
        Formation: 4-3-3
        Substitution: Flexible
        GamePlan: Counter Attack
        `);
    });
});
