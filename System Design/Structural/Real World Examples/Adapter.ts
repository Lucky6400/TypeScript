// The interface our system expects
interface IMusicPlayer {
    playMP3(file: string): void;
}

// The existing interface that we want to adapt
interface IWavPlayer {
    playWAV(file: string): void;
}

class MusicPlayer implements IMusicPlayer {
    playMP3(file: string): void {
        console.log(`Playing ${file}`);
    }
}

class WAVPlayer implements IWavPlayer {
    playWAV(file: string): void {
        // Implementation here...
        console.log(`Playing ${file}`);
    }
}

// The adapter
class WAVAdapter implements IMusicPlayer {
    constructor(private wavPlayer: WAVPlayer) { }

    playMP3(file: string): void {
        this.wavPlayer.playWAV(file);
    }
}

class Client {
    call() {
        let player = new MusicPlayer();
        player.playMP3(`Tu hi meri shab hai.mp3`);
        player = new WAVAdapter(new WAVPlayer());
        player.playMP3(`Woh lamhe Woh baatein.wav`);

    }
}

const client = new Client();
client.call();
