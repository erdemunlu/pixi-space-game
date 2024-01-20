import { Application } from "pixi.js";
import AttackShip from "./objects/ships/attack_ships/AttackShip";
import OrangeAttackShip from "./objects/ships/attack_ships/OrangeAttackShip";
import World from "./core/World";
import InputHandler from "./core/InputHandler";
import BulletControl from "./core/BulletControl";
import BulletPool from "./Helpers/BulletPool";
import { Direction } from "./Helpers/Direction";

export default class Game {
    static Instance: Game;
    app: Application;
    world: World;
    playerShip: AttackShip;
    inputHandler: InputHandler;
    bulletPool: BulletPool;
    bulletControl: BulletControl;
    lastFireTime = 0;

    constructor(app: Application) {
        Game.Instance = this;
        this.app = app;
        this.world = new World();
        this.playerShip = new OrangeAttackShip();
        this.inputHandler = new InputHandler();
        this.bulletPool = new BulletPool();
        this.bulletControl = new BulletControl();

        this.app.ticker.add(this.gameLoop.bind(this));
    }

    gameLoop() {
        if (this.inputHandler.right()) {
            this.playerShip.clampPositionToScreen();
            this.playerShip.moveStrategy?.move(Direction.Right);
        }

        if (this.inputHandler.left()) {
            this.playerShip.clampPositionToScreen();
            this.playerShip.moveStrategy?.move(Direction.Left);
        }

        if (this.inputHandler.isKeyDown(" ")) {
            if (this.app.ticker.lastTime > this.lastFireTime) {
                const appTime = this.app.ticker.lastTime;
                this.lastFireTime = appTime + this.playerShip?.attackStrategy.fireInterval;
                this.playerShip.attackStrategy?.attack();
            }
        }
    }
}
