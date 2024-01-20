import { Adapter, Client, FastBowler, SpinBowler } from "./Adapter";


describe('Adapter Pattern', () => {
    test('FastBowler should bowl fast', () => {
        const fastBowler = new FastBowler();
        expect(fastBowler.bowlFast(151)).toBe('Bowling Speed: 151KPH');
    });

    test('SpinBowler should bowl spin', () => {
        const spinBowler = new SpinBowler();
        expect(spinBowler.bowlSpin('75')).toBe('This spin bowler has 75KPH avg speed.');
    });

    test('Adapter should adapt SpinBowler to FastBowling interface', () => {
        const adapter = new Adapter();
        expect(adapter.bowlFast(95)).toBe('This spin bowler has 95KPH avg speed.');
    });

    test('Client should call FastBowler and Adapter', () => {
        console.log = jest.fn();
        const client = new Client();
        client.call();
        expect(console.log).toHaveBeenCalledWith('Bowling Speed: 151KPH');
        expect(console.log).toHaveBeenCalledWith('This spin bowler has 75KPH avg speed.');
    });
});
