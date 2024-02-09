import { Point, Sprite, Texture } from "pixi.js";
import { Ship } from "./Ship";
import AttackStrategyOrangeShip from "../../Strategies/AttackStrategyOrangeShip";
import MoveStrategyOrangeShip from "../../Strategies/MoveStrategyOrangeShip";
import Game from "../../Game";
import { HealthProgressBar } from "../../Helpers/HealthProgressBar";
import { HitboxCollider } from "../../Helpers/HitboxCollider";

export default class OrangeShip extends Ship {
    healthProgressBar!: HealthProgressBar;
    healthBarPoint: Point = new Point(0, 50);
    constructor(health: number) {
        super();
        this.health = health;
        this.initialize();
        this.setStrategies();
    }

    initialize(): void {
        this.setSprite(new Sprite(Texture.from("orange_ship.png")));
        this.sprite.anchor.set(0.5, 0.5);
        this.position.set(400, 500);
        this.hitboxCollider = new HitboxCollider(new Point(400, 500), this.sprite.width, this.sprite.height);
        this.healthProgressBar = new HealthProgressBar(this.health, this.healthBarPoint, this.sprite);
    }
    attack(): void {
        this.attackStrategy.attack(this.position);
    }
    getFireInterval(): number {
        return this.attackStrategy.fireInterval;
    }
    move(delta: number): void {
        this.moveStrategy.move(this, delta, this.hitboxCollider);
    }
    getHit(damage: number): void {
        this.health -= damage;
        this.health > 0
            ? Game.Instance.audioManager.playSound(this.getHitSoundName)
            : Game.Instance.audioManager.playSound(this.deathSoundName);
        this.healthProgressBar.updateFillAmount(this.health);
    }
    setStrategies(): void {
        this.attackStrategy = new AttackStrategyOrangeShip();
        this.moveStrategy = new MoveStrategyOrangeShip();
    }
}
