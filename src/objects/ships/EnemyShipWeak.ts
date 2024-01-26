import { Sprite, Texture } from "pixi.js";
import { Ship } from "./Ship";
import { MoveStrategyEnemyWeakShip } from "../../Strategies/MoveStrategyEnemyWeakShip";

export class EnemyShipWeak extends Ship {
    constructor() {
        super();
        this.health = 100;
        this.setVisual();
        this.setStrategies();
    }
    attack(): void {
        throw new Error("Method not implemented.");
    }
    move(): void {
        this.moveStrategy.move();
    }
    getHit(damage: number): void {
        this.health -= damage;
    }

    setStrategies() {
        this.moveStrategy = new MoveStrategyEnemyWeakShip(this);
    }
    setVisual() {
        this.setSprite(new Sprite(Texture.from("enemy_ship_weak.png")));
        this.sprite.anchor.set(0.5, 0.5);
        this.position.set(400, 50);
    }
}
