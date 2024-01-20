import Game from "../Game";
import IMoveStrategy from "../Interfaces/IMoveStrategy";

export default class MoveStrategyOrangeShip implements IMoveStrategy {
    speed: number;

    constructor() {
        this.speed = 5;
    }

    move(direction: number): void {
        Game.Instance.playerShip.position.x += this.speed * direction;
    }
}
