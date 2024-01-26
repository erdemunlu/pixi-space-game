import Game from "../Game";
import { Direction } from "../Helpers/Direction";
import IMoveStrategy from "../Interfaces/IMoveStrategy";

export default class MoveStrategyOrangeShip implements IMoveStrategy {
    speed: number;

    constructor() {
        this.speed = 5;
    }

    move(): void {
        if (Game.Instance.inputHandler.right()) {
            Game.Instance.player.ship.position.x += this.speed * Direction.Right;
            Game.Instance.player.ship.clampPositionToScreen();
        }
        if (Game.Instance.inputHandler.left()) {
            Game.Instance.player.ship.position.x += this.speed * Direction.Left;
            Game.Instance.player.ship.clampPositionToScreen();
        }
    }
}
