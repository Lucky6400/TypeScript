export interface TeamArranger {
    arrangeBattingOrder(keyPlayer: string, players: string[]): string[];
}

export abstract class CricketTeam {
    constructor(
        protected players: string[],
        protected teamArranger: TeamArranger
    ) { }

    abstract arrangeBattingOrder(keyPlayer: string): void;

    public getPlayers(): string[] {
        return this.players;
    }
}

export class DomesticCricketTeam extends CricketTeam {
    arrangeBattingOrder(keyPlayer: string): void {
        this.players = this.teamArranger.arrangeBattingOrder(keyPlayer, this.players);
    }
}

export class InternationalCricketTeam extends CricketTeam {
    arrangeBattingOrder(keyPlayer: string): void {
        this.players = this.teamArranger.arrangeBattingOrder(keyPlayer, this.players);
    }
}

export class FirstClassTeamArranger implements TeamArranger {
    arrangeBattingOrder(keyPlayer: string, players: string[]): string[] {
        return players.filter(player => player !== keyPlayer).concat(keyPlayer);
    }
}

export class InternationalTeamArranger implements TeamArranger {
    arrangeBattingOrder(keyPlayer: string, players: string[]): string[] {
        let res = players.filter(player => player !== keyPlayer);
        res.unshift(keyPlayer);
        return res;
    }
}

const players: string[] = ["Dhoni", "Sachin", "Sehwag", "Irfan", "Sreesanth", "Zaheer", "Yuvraj", "Dravid", "Gambhir"];
const fca = new FirstClassTeamArranger();
const ita = new InternationalTeamArranger();

const domesticTeam = new DomesticCricketTeam(players, fca);
domesticTeam.arrangeBattingOrder("Dhoni");
console.log(domesticTeam.getPlayers()); // print the players after arranging

const internationalTeam = new InternationalCricketTeam(players, ita);
internationalTeam.arrangeBattingOrder("Dhoni");
console.log(internationalTeam.getPlayers()); // print the players after arranging
