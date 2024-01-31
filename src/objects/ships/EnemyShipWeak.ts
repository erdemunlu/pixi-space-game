import { Sprite, Texture } from "pixi.js";
import { Ship } from "./Ship";
import { MoveStrategyEnemyWeakShip } from "../../Strategies/MoveStrategyEnemyWeakShip";
import { AttackStrategyEnemyWeakShip } from "../../Strategies/AttackStrategyEnemyWeakShip";
import FireIntervalControl from "../../core/FireIntervalControl";

export class EnemyShipWeak extends Ship {
    name: string = EnemyShipWeak.name;
    speed!: number;
    moveDirection!: number;
    fireIntervalControl: FireIntervalControl;

    constructor(health: number, speed: number, moveDirection: number, position: { x: number; y: number }) {
        super();
        this.health = health;
        this.speed = speed;
        this.moveDirection = moveDirection;
        this.position.set(position.x, position.y);
        this.fireIntervalControl = new FireIntervalControl();
        this.setVisual();
        this.setStrategies();
    }

    attack(): void {
        this.attackStrategy.attack();
    }
    move(): void {
        this.moveStrategy.move();
    }
    getHit(damage: number): void {
        this.health -= damage;
    }

    setStrategies() {
        this.moveStrategy = new MoveStrategyEnemyWeakShip(this);
        this.attackStrategy = new AttackStrategyEnemyWeakShip(this);
    }
    setVisual() {
        this.setSprite(new Sprite(Texture.from("enemy_ship_weak.png")));
        this.sprite.anchor.set(0.5, 0.5);
    }
}
