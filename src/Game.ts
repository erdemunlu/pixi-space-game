import { Application } from "pixi.js";
import World from "./core/World";
import BulletControl from "./core/BulletControl";
import BulletPool from "./Helpers/BulletPool";
import { Player } from "./core/Player";

export default class Game {
    static Instance: Game;
    app: Application;
    world: World;
    bulletPool: BulletPool;
    bulletControl: BulletControl;
    player: Player;

    constructor(app: Application) {
        Game.Instance = this;
        this.app = app;
        this.world = new World();
        this.bulletPool = new BulletPool();
        this.bulletControl = new BulletControl();
        this.player = new Player();
    }
}
