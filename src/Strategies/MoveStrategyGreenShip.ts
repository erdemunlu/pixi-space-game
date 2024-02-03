import Game from "../Game";
import { Direction } from "../Helpers/Direction";
import IMoveStrategy from "../Interfaces/IMoveStrategy";
import { Ship } from "../objects/ships/Ship";

export default class MoveStrategyGreenShip implements IMoveStrategy {
    speed: number;

    constructor() {
        this.speed = 3;
    }

    move(ship: Ship): void {
        if (Game.Instance.inputHandler.right()) {
            ship.position.x += this.speed * Direction.Right;
            ship.clampPositionToScreen();
        }
        if (Game.Instance.inputHandler.left()) {
            ship.position.x += this.speed * Direction.Left;
            ship.clampPositionToScreen();
        }
    }
}