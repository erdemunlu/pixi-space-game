import { Ship } from "../objects/ships/Ship";

export default interface IMoveStrategy {
    speed: number;
    move(ship: Ship): void;
}
