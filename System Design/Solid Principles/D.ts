/*
Dependency Inversion Principle

A high-level module should not depend on a low-level module; both should depend on abstraction. 

The dependency inversion principle states that when you use modules in your entities, you should pass them as abstractions instead of directly instantiating them.
*/

type Player = {
    name: string;
    email: string;
}

// class PlayerService {
//     constructor() {}

//     findByEmail(email: string): Player | undefined {
//         const playerRepo = PlayerRepositoryFactory.getInstance();
//         return playerRepo.findByEmail(email);
//     }
// }

// class PlayerRepositoryFactory {
//     static getInstance(): PlayerRepository {
//         return new PlayerRepository();
//     }
// }

// class PlayerRepository {
//     players: Player[] = [
//         {
//             name: 'Rahul Dravid',
//             email: 'rahuldravid@test.dev'
//         }
//     ];

//     findByEmail(email: string): Player | undefined {
//         return this.players.find(v => v.email === email);
//     }
// }

/*
This program contains three entities. PlayerService is a top-level component that calls the PlayerRepositoryFactory class to get an instance of the PlayerRepository service. The violation of this principle happens here within the highlighted code section. We directly import PlayerRepositoryFactory inside the function, which makes it a hard dependency. If the PlayerRepositoryFactory class changes, we will have to change the PlayerService class as well. Additionally, we cannot easily test the method  in isolation and we will have to mock the whole PlayerRepositoryFactory module  to do that.

The solution to making it less dependent and more testable is to pass the instance in the constructor and make it implement an interface instead:
*/

interface PlayerQuery {
    findByEmail(email: string): Player | undefined;
}

class PlayerService {
    private playerQuery: PlayerQuery = PlayerRepositoryFactory.getInstance();
    constructor(playerQuery: PlayerQuery = PlayerRepositoryFactory.getInstance()) {
        this.playerQuery = playerQuery;
    }

    findByEmail(email: string): Player | undefined {
        return this.playerQuery.findByEmail(email);
    }
}

class PlayerRepositoryFactory {
    static getInstance(): PlayerRepository {
        return new PlayerRepository();
    }
}

class PlayerRepository {
    players: Player[] = [
        {
            name: 'Rahul Dravid',
            email: 'rahuldravid@test.dev'
        }
    ];

    findByEmail(email: string): Player | undefined {
        return this.players.find(v => v.email === email);
    }
}