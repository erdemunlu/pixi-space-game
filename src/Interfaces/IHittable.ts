export default interface IHittable {
    health: number;
    getHit(damage: number): void;
}
