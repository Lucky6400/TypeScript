//Interfaces are similar to type aliases, except they only apply to object types.

interface Chelsea {
    players: number,
    captain: string,
    manager: string,
    champions: boolean
}

const chelsea: Chelsea = {
    players: 11,
    captain: "Cesar Azpiliqueta",
    manager: "Graham Potter",
    champions: false
}

// Extending interfaces
interface FootballTeam extends Chelsea {
    league: string,
    wins: number,
    losses: number
}
console.log(chelsea)