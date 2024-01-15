import { Application } from "pixi.js";
import AttackShip from "./objects/ships/attack_ships/AttackShip";
import OrangeAttackShip from "./objects/ships/attack_ships/OrangeAttackShip";
import World from "./core/World";
import InputHandler from "./core/InputHandler";

export default class Game {
    static Instance: Game;
    app: Application;
    world: World;
    orangeAttackShip: AttackShip;
    inputHandler: InputHandler;

    constructor(app: Application) {
        Game.Instance = this;
        this.app = app;
        this.world = new World();
        this.orangeAttackShip = new OrangeAttackShip();
        this.inputHandler = new InputHandler();

        this.app.ticker.add(this.gameLoop.bind(this));
    }

    gameLoop() {
        if (this.inputHandler.right()) {
            this.orangeAttackShip.x += 5;
        }

        if (this.inputHandler.left()) {
            this.orangeAttackShip.x -= 5;
        }
    }
}
