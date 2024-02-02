import { Sprite, Texture } from "pixi.js";
import { Ship } from "./Ship";
import AttackStrategyGreenShip from "../../Strategies/AttackStrategyGreenShip";
import MoveStrategyGreenShip from "../../Strategies/MoveStrategyGreenShip";
import Game from "../../Game";

export default class GreenShip extends Ship {
    constructor() {
        super();
        this.initialize();
        this.setStrategies();
    }

    initialize(): void {
        this.setSprite(new Sprite(Texture.from("green_ship.png")));
        this.sprite.anchor.set(0.5, 0.5);
        this.position.set(400, 500);
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
        Game.Instance.player.updateHealthText();
    }
    setStrategies() {
        this.attackStrategy = new AttackStrategyGreenShip();
        this.moveStrategy = new MoveStrategyGreenShip();
    }
}
