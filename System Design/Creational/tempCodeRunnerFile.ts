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
