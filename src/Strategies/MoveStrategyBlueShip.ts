import { Point } from "pixi.js";
import Game from "../Game";
import { Direction } from "../Helpers/Direction";
import { HitboxCollider } from "../Helpers/HitboxCollider";
import IMoveStrategy from "../Interfaces/IMoveStrategy";
import { Ship } from "../objects/ships/Ship";

export default class MoveStrategyBlueShip implements IMoveStrategy {
    speed: number;

    constructor() {
        this.speed = 4;
    }

    move(ship: Ship, delta: number, hitboxCollider: HitboxCollider): void {
        if (Game.Instance.inputHandler.right()) {
            ship.position.x += this.speed * Direction.Right * delta;
            ship.clampPositionToScreen();
            hitboxCollider.updatePoint(new Point(ship.position.x - hitboxCollider.width / 2, ship.position.y));
        }
        if (Game.Instance.inputHandler.left()) {
            ship.position.x += this.speed * Direction.Left * delta;
            ship.clampPositionToScreen();
            hitboxCollider.updatePoint(new Point(ship.position.x - hitboxCollider.width / 2, ship.position.y));
        }
    }
}
