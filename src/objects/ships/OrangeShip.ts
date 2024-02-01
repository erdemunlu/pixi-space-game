import { Sprite, Texture } from "pixi.js";
import { Ship } from "./Ship";
import AttackStrategyOrangeShip from "../../Strategies/AttackStrategyOrangeShip";
import MoveStrategyOrangeShip from "../../Strategies/MoveStrategyOrangeShip";
import Game from "../../Game";

export default class OrangeAttackShip extends Ship {
    health: number = 100;
    constructor() {
        super();
        this.initialize();
        this.setStrategies();
    }

    initialize(): void {
        this.setSprite(new Sprite(Texture.from("orange_ship.png")));
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
        Game.Instance.player.updateHealthText();
    }
    setStrategies() {
        this.attackStrategy = new AttackStrategyOrangeShip();
        this.moveStrategy = new MoveStrategyOrangeShip();
    }
}
