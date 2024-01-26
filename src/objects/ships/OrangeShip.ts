import { Sprite, Texture } from "pixi.js";
import { Ship } from "./Ship";
import AttackStrategyOrangeShip from "../../Strategies/AttackStrategyOrangeShip";
import MoveStrategyOrangeShip from "../../Strategies/MoveStrategyOrangeShip";

export default class OrangeAttackShip extends Ship {
    constructor() {
        super();
        this.setVisual();
        this.setStrategies();
    }

    attack(): void {
        this.attackStrategy.attack();
    }
    getFireInterval(): number {
        return this.attackStrategy.fireInterval;
    }
    move(): void {
        this.moveStrategy.move();
    }
    getHit(damage: number): void {
        this.health -= damage;
    }

    setVisual() {
        this.setSprite(new Sprite(Texture.from("orange_ship.png")));
        this.sprite.anchor.set(0.5, 0.5);
        this.position.set(400, 500);
    }
    setStrategies() {
        this.attackStrategy = new AttackStrategyOrangeShip();
        this.moveStrategy = new MoveStrategyOrangeShip();
    }
}
