import { Sprite, Texture } from "pixi.js";
import { Ship } from "./Ship";
import AttackStrategyBlueShip from "../../Strategies/AttackStrategyBlueShip";
import MoveStrategyBlueShip from "../../Strategies/MoveStrategyBlueShip";
import Game from "../../Game";

export default class BlueShip extends Ship {
    constructor() {
        super();
        this.initialize();
        this.setStrategies();
    }

    initialize(): void {
        this.setSprite(new Sprite(Texture.from("blue_ship.png")));
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
        this.attackStrategy = new AttackStrategyBlueShip();
        this.moveStrategy = new MoveStrategyBlueShip();
    }
}
