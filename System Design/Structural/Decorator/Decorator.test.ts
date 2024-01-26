import { BatsmanDecorator } from './Decorator';

const spy = jest.spyOn(console, "log").mockImplementation(() => { });

afterEach(() => {
    spy.mockReset();
});

describe("call and call two times", () => {

    test("it calls the decorated object method", () => {
        const mockGroundedShot = jest.fn();

        const mock = {
            groundedShot: mockGroundedShot
        };

        const log = new BatsmanDecorator(mock);
        log.groundedShot(4);
        expect(mockGroundedShot).toHaveBeenCalledWith(4);
    });

    test("it calls the decorator calls once", () => {
        const mockGroundedShot = jest.fn();

        const mock = {
            groundedShot: mockGroundedShot
        };

        const log = new BatsmanDecorator(mock);
        log.groundedShot(4);
        expect(mockGroundedShot).toHaveBeenCalledTimes(1);
    })
})