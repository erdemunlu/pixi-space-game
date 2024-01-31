import { Application } from "pixi.js";
import World from "./core/World";
import { Player } from "./core/Player";
import InputHandler from "./core/InputHandler";
import { LevelController } from "./core/LevelController";
import { MenuManager } from "./core/MenuManager";
import { StateManager } from "./core/StateManager";
import { GameState } from "./Helpers/GameState";

export default class Game {
    static Instance: Game;
    app: Application;
    world: World;
    levelController: LevelController;
    player: Player;
    inputHandler: InputHandler;
    menuManager: MenuManager;
    stateManager: StateManager;

    constructor(app: Application) {
        Game.Instance = this;
        this.app = app;
        this.world = new World();
        this.stateManager = new StateManager(GameState.Menu);
        this.levelController = new LevelController();
        this.menuManager = new MenuManager();
        this.player = new Player();
        this.inputHandler = new InputHandler();
    }
}
