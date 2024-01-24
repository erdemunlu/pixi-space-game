import { Application } from "pixi.js";
import OrangeShip from "./objects/ships/OrangeShip";
import World from "./core/World";
import InputHandler from "./core/InputHandler";
import BulletControl from "./core/BulletControl";
import BulletPool from "./Helpers/BulletPool";
import FireIntervalControl from "./core/FireIntervalControl";
import { Direction } from "./Helpers/Direction";
import { Ship } from "./objects/ships/Ship";

export default class Game {
    static Instance: Game;
    app: Application;
    world: World;
    playerShip: Ship;
    inputHandler: InputHandler;
    bulletPool: BulletPool;
    bulletControl: BulletControl;
    fireIntervalControl: FireIntervalControl;

    constructor(app: Application) {
        Game.Instance = this;
        this.app = app;
        this.world = new World();
        this.playerShip = new OrangeShip();
        this.fireIntervalControl = new FireIntervalControl();
        this.inputHandler = new InputHandler();
        this.bulletPool = new BulletPool();
        this.bulletControl = new BulletControl();

        this.app.ticker.add(this.gameLoop.bind(this));
    }

    gameLoop() {
        if (this.inputHandler.right()) {
            this.playerShip.clampPositionToScreen();
            this.playerShip.move(Direction.Right);
        }

        if (this.inputHandler.left()) {
            this.playerShip.clampPositionToScreen();
            this.playerShip.move(Direction.Left);
        }

        if (this.inputHandler.isKeyDown(" ")) {
            if (this.app.ticker.lastTime > this.fireIntervalControl.getLastFireTime()) {
                const appTime = this.app.ticker.lastTime;
                this.fireIntervalControl.updateLastFireTime(appTime + this.playerShip.attackStrategy?.fireInterval);
                this.playerShip.attack();
            }
        }
    }
}
