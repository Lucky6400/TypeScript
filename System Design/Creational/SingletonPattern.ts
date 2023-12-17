/*
There are scenarios in which only one instance of the specific class should ever exist, and
that leads to Singleton Pattern.
*/

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