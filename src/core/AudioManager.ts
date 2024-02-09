import { Howl } from "howler";

export class AudioManager {
    soundFiles = [
        { name: "soundtrack.ogg", src: "./assets/Audio/Musics/soundtrack.ogg" },
        { name: "shot_orange.wav", src: "./assets/Audio/Sounds/shot_orange.wav" },
        { name: "shot_green.wav", src: "./assets/Audio/Sounds/shot_green.wav" },
        { name: "shot_blue.wav", src: "./assets/Audio/Sounds/shot_blue.wav" },
        { name: "shot_enemy_weak.wav", src: "./assets/Audio/Sounds/shot_enemy_weak.wav" },
        { name: "shot_enemy_strong.wav", src: "./assets/Audio/Sounds/shot_enemy_strong.wav" },
        { name: "gethit.ogg", src: "./assets/Audio/Sounds/gethit.ogg" },
        { name: "death.wav", src: "./assets/Audio/Sounds/death.wav" },
    ];
    sounds: { [key: string]: Howl } = {};

    constructor() {
        this.preloadAudioFiles();
        this.playSoundtrack();
    }
    preloadAudioFiles(): void {
        this.soundFiles.forEach((soundFile) => {
            this.sounds[soundFile.name] = new Howl({
                src: [soundFile.src],
                preload: true,
            });
        });
    }
    playSoundtrack(): void {
        const soundtrack = this.sounds["soundtrack.ogg"];
        soundtrack.loop(true);
        soundtrack.volume(0.05);
        soundtrack.play();
    }
    playSound(soundName: string, soundVolume: number = 1): void {
        const sound = this.sounds[soundName];
        sound.volume(soundVolume);
        sound.play();
    }
}
