/*
There are scenarios in which only one instance of the specific class should ever exist, and
that leads to Singleton Pattern.
*/

import "reflect-metadata";
import { injectable, Container } from "inversify";

export class Singleton {
    // Stores the singleton instance
    private static instance: Singleton;
    // Prevents creation of new instances
    private constructor() { }
    // Method to retrieve instance
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}


// modern implementation of Singleton

class ModernSingleton {

}

export default ModernSingleton;

// implementation using an IoC container
interface CricketersApi {
    getCricketers(): Promise<string[]>
}

let TYPES = {
    CricketersApi: Symbol("CricketersApi")
};

@injectable()
class Cricketers implements CricketersApi {
    getCricketers(): Promise<string[]> {
        return Promise.resolve(["Sreesanth", "Zaheer Khan", "Virender Sehwag"])
    }
}

const container = new Container();
container.bind<CricketersApi>(TYPES.CricketersApi).to(Cricketers).inSingletonScope();

const cricketersService = container.get<CricketersApi>(TYPES.CricketersApi);

cricketersService.getCricketers().then(cricketers => {
    console.log(cricketers);
});


class Country {
    private name: string = 'Bharat';

    private static _default: Country;

    static get default(): Country {
        if (!Country._default) {
            Country._default = new Country();
        }
        return Country._default;
    }

    public get getName(): string {
        return this.name;
    }

    public set setName(value: string) {
        this.name = value;
    }
}

const bharat: Country = Country.default;
const india: Country = Country.default;
india.setName = "india";
console.log(bharat)
console.log(india)