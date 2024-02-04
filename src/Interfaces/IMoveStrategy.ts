import { HitboxCollider } from "../Helpers/HitboxCollider";
import { Ship } from "../objects/ships/Ship";

export default interface IMoveStrategy {
    speed: number;
    move(ship: Ship, delta: number, hitboxCollider: HitboxCollider): void;
}
