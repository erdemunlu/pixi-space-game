import { Point, Sprite, Texture } from "pixi.js";
import { Ship } from "./Ship";
import { MoveStrategyEnemyStrongShip } from "../../Strategies/MoveStrategyEnemyStrongShip";
import { AttackStrategyEnemyStrongShip } from "../../Strategies/AttackStrategyEnemyStrongShip";
import Game from "../../Game";
import { HitboxCollider } from "../../Helpers/HitboxCollider";

export class EnemyShipStrong extends Ship {
    name: string = EnemyShipStrong.name;
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
    move(delta: number): void {
        this.moveStrategy.move(this, delta, this.hitboxCollider);
    }
    getHit(damage: number): void {
        this.health -= damage;
        this.health > 0
            ? Game.Instance.audioManager.playSound(this.getHitSoundName)
            : Game.Instance.audioManager.playSound(this.deathSoundName);
    }

    setStrategies() {
        this.moveStrategy = new MoveStrategyEnemyStrongShip(this.speed, this.moveDirection);
        this.attackStrategy = new AttackStrategyEnemyStrongShip();
    }
    setVisual() {
        this.setSprite(new Sprite(Texture.from("enemy_ship_strong.png")));
        this.sprite.anchor.set(0.5, 0.5);
        this.hitboxCollider = new HitboxCollider(
            new Point(this.position.x, this.position.y),
            this.sprite.width,
            this.sprite.height,
        );
    }
}
