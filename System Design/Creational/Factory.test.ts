import { AnilKumbleFactory, RahulDravidFactory, AnilKumble, RahulDravid } from './Factory';
import { beforeEach, describe, expect, test } from '@jest/globals';


let akf: AnilKumbleFactory;
let rdf: RahulDravidFactory;

beforeEach(() => {
    akf = new AnilKumbleFactory();
    rdf = new RahulDravidFactory();
});


describe("Testig Both Players", () => {
    test("Checking Anil", () => {
        const anilKumble = akf.create();
        expect(anilKumble).toBeInstanceOf(AnilKumble);
    })

    test("Checking Rahul", () => {
        const rahulDravid = rdf.create();
        expect(rahulDravid).toBeInstanceOf(RahulDravid);
    })
})
