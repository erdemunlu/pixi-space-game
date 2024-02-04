import { Sprite, Texture, Point } from "pixi.js";
import { Ship } from "./Ship";
import AttackStrategyBlueShip from "../../Strategies/AttackStrategyBlueShip";
import MoveStrategyBlueShip from "../../Strategies/MoveStrategyBlueShip";
import Game from "../../Game";
import { HealthProgressBar } from "../../Helpers/HealthProgressBar";

export default class BlueShip extends Ship {
    healthProgressBar!: HealthProgressBar;
    healthBarPoint: Point = new Point(0, 50);

    constructor(health: number) {
        super();
        this.health = health;
        this.initialize();
        this.setStrategies();
    }

    initialize(): void {
        this.setSprite(new Sprite(Texture.from("blue_ship.png")));
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
    move(): void {
        this.moveStrategy.move(this);
    }
    getHit(damage: number): void {
        this.health -= damage;
        this.health > 0
            ? Game.Instance.audioManager.playSound(this.getHitSoundName)
            : Game.Instance.audioManager.playSound(this.deathSoundName);
        this.healthProgressBar.updateFillAmount(this.health);
    }
    setStrategies() {
        this.attackStrategy = new AttackStrategyBlueShip();
        this.moveStrategy = new MoveStrategyBlueShip();
    }
}
