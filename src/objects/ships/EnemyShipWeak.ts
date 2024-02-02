import { Sprite, Texture } from "pixi.js";
import { Ship } from "./Ship";
import { MoveStrategyEnemyWeakShip } from "../../Strategies/MoveStrategyEnemyWeakShip";
import { AttackStrategyEnemyWeakShip } from "../../Strategies/AttackStrategyEnemyWeakShip";
import Game from "../../Game";

export class EnemyShipWeak extends Ship {
    name: string = EnemyShipWeak.name;
    speed: number;
    moveDirection: number;

    constructor(health: number, speed: number, moveDirection: number, position: { x: number; y: number }) {
        super();
        this.health = health;
        this.speed = speed;
        this.moveDirection = moveDirection;
        this.position.set(position.x, position.y);
        this.setVisual();
        this.setStrategies();
    }

    attack(): void {
        this.attackStrategy.attack(this.position);
    }
    move(): void {
        this.moveStrategy.move(this);
    }
    getHit(damage: number): void {
        this.health -= damage;
        this.health > 0
            ? Game.Instance.audioManager.playSound(this.getHitSoundName)
            : Game.Instance.audioManager.playSound(this.deathSoundName);
    }

    setStrategies() {
        this.moveStrategy = new MoveStrategyEnemyWeakShip(this.speed, this.moveDirection);
        this.attackStrategy = new AttackStrategyEnemyWeakShip();
    }
    setVisual() {
        this.setSprite(new Sprite(Texture.from("enemy_ship_weak.png")));
        this.sprite.anchor.set(0.5, 0.5);
    }
}
