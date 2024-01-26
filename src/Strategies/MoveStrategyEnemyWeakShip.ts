import Game from "../Game";
import { Direction } from "../Helpers/Direction";
import IMoveStrategy from "../Interfaces/IMoveStrategy";
import { EnemyShipWeak } from "../objects/ships/EnemyShipWeak";

export class MoveStrategyEnemyWeakShip implements IMoveStrategy {
    speed: number = 1;
    enemyShipWeak: EnemyShipWeak;
    direction: number = Direction.Right;
    screenWidth: number;

    constructor(enemyShipWeak: EnemyShipWeak) {
        this.enemyShipWeak = enemyShipWeak;
        this.screenWidth = Game.Instance.world.width;
    }

    move(): void {
        if (this.direction === Direction.Right) {
            this.enemyShipWeak.position.x += this.speed * Direction.Right;
            if (this.enemyShipWeak.position.x > this.screenWidth - this.enemyShipWeak.width) {
                this.enemyShipWeak.position.x = this.screenWidth - this.enemyShipWeak.width;
                this.direction = Direction.Left;
            }
        } else {
            this.enemyShipWeak.position.x += this.speed * Direction.Left;
            if (this.enemyShipWeak.position.x < this.enemyShipWeak.width) {
                this.enemyShipWeak.position.x = this.enemyShipWeak.width;
                this.direction = Direction.Right;
            }
        }
    }
}
