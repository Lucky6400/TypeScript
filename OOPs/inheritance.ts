// interface can be used to define a type that a class must follow. For this, we use 'implements' keyword.

interface Chelsea {
    name: string,
    players: number,
    stadium: string,
    champions: boolean
}

class ChelseaFC implements Chelsea {
    name = "Chelsea FC"
    players = 11
    stadium = "Stamford Bridge"
    champions = false
}

// class can also implement multiple interfaces

interface TeamDetails {
    league: string,
    ranking: number,
    wins: number,
    losses: number
}

class ChelseaFC2 implements Chelsea, TeamDetails {
    name = "Chelsea FC"
    players = 11
    stadium = "Stamford Bridge"
    champions = false
    league = 'Barclays Premier League'
    ranking = 3
    wins = 23
    losses = 9

    constructor( protected readonly rival: string) {}

    printRivalName(): string {
        return this.rival
    }
}

// 'extends' keyword

class ChelseaFC3 extends ChelseaFC2 {
    public constructor(rival: string){
        super(rival)
    }
}

const chelsea3 = new ChelseaFC3('Manchester United');

console.log(chelsea3.printRivalName());
