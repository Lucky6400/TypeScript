import { FlyweightFactory, ConcreteFlyweight, Flyweight } from './Flyweight';

describe('FlyweightFactory', () => {
    let factory: FlyweightFactory;

    beforeEach(() => {
        factory = new FlyweightFactory();
    });

    it('creates memory-efficient Flyweight objects', () => {
        const flyweight1 = factory.create({ state: 'initial' });
        const flyweight2 = factory.create({ state: 'initial' });

        expect(flyweight1).toEqual(flyweight2);
    });

    it('creates new Flyweight objects for different states', () => {
        const flyweight1 = factory.create({ state: 'initial' });
        const flyweight2 = factory.create({ state: 'final' });

        expect(flyweight1).not.toBe(flyweight2);
    });
});

describe('ConcreteFlyweight', () => {
    let flyweight: Flyweight;

    beforeEach(() => {
        flyweight = new ConcreteFlyweight({ state: 'initial' });
    });

    it('has the right state and customization based on the passed parameter', () => {
        const performSpy = jest.spyOn(console, 'log');

        flyweight.perform({ id: '90y3h4i0ro' });
       
        expect(performSpy).toHaveBeenCalled();
        performSpy.mockRestore();
    });
});
