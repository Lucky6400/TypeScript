import { FirstClassTeamArranger, InternationalTeamArranger, DomesticCricketTeam, InternationalCricketTeam } from './Bridge';

describe('CricketTeam', () => {
    const players: string[] = ["Dhoni", "Sachin", "Sehwag", "Irfan", "Sreesanth", "Zaheer", "Yuvraj", "Dravid", "Gambhir"];
    const fca = new FirstClassTeamArranger();
    const ita = new InternationalTeamArranger();

    test('DomesticCricketTeam arranges players correctly', () => {
        const domesticTeam = new DomesticCricketTeam(players, fca);
        domesticTeam.arrangeBattingOrder("Dhoni");
        expect(domesticTeam.getPlayers()).toEqual(["Sachin", "Sehwag", "Irfan", "Sreesanth", "Zaheer", "Yuvraj", "Dravid", "Gambhir", "Dhoni"]);
    });

    test('InternationalCricketTeam arranges players correctly', () => {
        const internationalTeam = new InternationalCricketTeam(players, ita);
        internationalTeam.arrangeBattingOrder("Dhoni");
        expect(internationalTeam.getPlayers()).toEqual(["Dhoni", "Sachin", "Sehwag", "Irfan", "Sreesanth", "Zaheer", "Yuvraj", "Dravid", "Gambhir"]);
    });
});
