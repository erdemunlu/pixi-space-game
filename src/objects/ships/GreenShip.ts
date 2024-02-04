import { Sprite, Texture, Point } from "pixi.js";
import { Ship } from "./Ship";
import AttackStrategyGreenShip from "../../Strategies/AttackStrategyGreenShip";
import MoveStrategyGreenShip from "../../Strategies/MoveStrategyGreenShip";
import Game from "../../Game";
import { HealthProgressBar } from "../../Helpers/HealthProgressBar";

export default class GreenShip extends Ship {
    healthProgressBar!: HealthProgressBar;
    healthBarPoint: Point = new Point(0, 50);

    constructor(health: number) {
        super();
        this.health = health;
        this.initialize();
        this.setStrategies();
    }

    initialize(): void {
        this.setSprite(new Sprite(Texture.from("green_ship.png")));
        this.sprite.anchor.set(0.5, 0.5);
        this.position.set(400, 500);
        this.healthProgressBar = new HealthProgressBar(this.health, this.healthBarPoint, this.sprite);
    }
    attack(): void {
        this.attackStrategy.attack(this.position);
    }
    getFireInterval(): number {
        return this.attackStrategy.fireInterval;
    }
    move(delta: number): void {
        this.moveStrategy.move(this, delta);
    }
    getHit(damage: number): void {
        this.health -= damage;
        this.health > 0
            ? Game.Instance.audioManager.playSound(this.getHitSoundName)
            : Game.Instance.audioManager.playSound(this.deathSoundName);
        this.healthProgressBar.updateFillAmount(this.health);
    }
    setStrategies() {
        this.attackStrategy = new AttackStrategyGreenShip();
        this.moveStrategy = new MoveStrategyGreenShip();
    }
}
