import { Client, ExperimentalRocket, ExperimentalRocketFactory } from './AbstractFactory';
import { describe, expect, test } from '@jest/globals';

const eRF: ExperimentalRocketFactory = new ExperimentalRocketFactory();
const client: Client = new Client();

describe("Testing the abstract factory", () => {
    test("rocket instance", () => {
        const expRocket = eRF.createRocket();
        expect(expRocket).toBeInstanceOf(ExperimentalRocket);
    })

    test("built rocket instance", () => {
        const builtRocket = client.buildRocket(eRF);
        expect(builtRocket).toBeInstanceOf(ExperimentalRocket);
    })
})