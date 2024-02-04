class ArenaRender {
    render(): void {
        console.log(`
        ''''''''''
        '        '
        '        '
        ''''''''''
        `)
    }
}

class PlayerSpawn {
    spawn(): void {
        console.log(`
            :-)
        `)
    }
}


class Facade {
    private arena: ArenaRender;
    private player: PlayerSpawn;

    constructor(arena: ArenaRender, player: PlayerSpawn) {
        this.arena = arena;
        this.player = player;
    }

    startGame(): void {
        this.arena.render();
        this.player.spawn();
        console.log('Level 1 start')
    }
}

new Facade(new ArenaRender(), new PlayerSpawn()).startGame();