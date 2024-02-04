import Game from "../Game";
import { Direction } from "../Helpers/Direction";
import IMoveStrategy from "../Interfaces/IMoveStrategy";
import { Ship } from "../objects/ships/Ship";

export class MoveStrategyEnemyWeakShip implements IMoveStrategy {
    speed: number;
    moveDirection: number;
    screenWidth: number;

    constructor(speed: number, moveDirection: number) {
        this.speed = speed;
        this.moveDirection = moveDirection;
        this.screenWidth = Game.Instance.world.width;
    }

    move(ship: Ship, delta: number): void {
        if (this.moveDirection === Direction.Right) {
            ship.position.x += this.speed * Direction.Right * delta;
            if (ship.position.x > this.screenWidth - ship.width) {
                ship.position.x = this.screenWidth - ship.width;
                this.moveDirection = Direction.Left;
            }
        } else {
            ship.position.x += this.speed * Direction.Left * delta;
            if (ship.position.x < ship.width) {
                ship.position.x = ship.width;
                this.moveDirection = Direction.Right;
            }
        }
    }
}
