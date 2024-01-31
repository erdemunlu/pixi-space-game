import { Howl } from "howler";

export class AudioManager {
    constructor() {
        this.playSoundtrack();
    }

    playSoundtrack() {
        const sound = new Howl({
            src: ["./assets/Audio/Musics/soundtrack.ogg"],
            loop: true,
            volume: 0.05,
        });
        sound.play();
    }

    playSound(soundName: string) {
        const sound = new Howl({
            src: [`./assets/Audio/Sounds/${soundName}`],
            volume: 1,
        });
        sound.play();
    }
}
