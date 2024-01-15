import AttackShip from "./AttackShip";
import { Sprite } from "pixi.js";
import AttackStrategyOrangeShip from "../../../Strategies/AttackStrategyOrangeShip";
import IDestroyable from "../../../Interfaces/IDestroyable";

export default class OrangeAttackShip extends AttackShip implements IDestroyable {
    health: number;

    constructor() {
        super();

        this.health = 100;
        this.attackDamage = 10;

        this.setSprite(Sprite.from("assets/ships/orange_attack_ship.png"));
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.position.set(400, 500);

        this.setStrategies();
    }

    setStrategies() {
        this.attackStrategy = new AttackStrategyOrangeShip();
    }
}
