export default interface IHittable {
    health: number;
    getHitSoundName: string;
    deathSoundName: string;
    getHit(damage: number): void;
}
