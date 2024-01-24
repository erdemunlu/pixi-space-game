import { Ship } from "../objects/ships/Ship";
import FireIntervalControl from "./FireIntervalControl";
import OrangeShip from "../objects/ships/OrangeShip";
import InputHandler from "./InputHandler";
import Game from "../Game";
import { Direction } from "../Helpers/Direction";

export class Player {
    ship: Ship;
    fireIntervalControl: FireIntervalControl;
    inputHandler: InputHandler;

    constructor() {
        this.ship = new OrangeShip();
        this.fireIntervalControl = new FireIntervalControl();
        this.inputHandler = new InputHandler();

        Game.Instance.app.ticker.add(this.gameLoop.bind(this));
    }

    gameLoop() {
        if (this.inputHandler.right()) {
            this.ship.clampPositionToScreen();
            this.ship.move(Direction.Right);
        }

        if (this.inputHandler.left()) {
            this.ship.clampPositionToScreen();
            this.ship.move(Direction.Left);
        }

        if (this.inputHandler.isKeyDown(" ")) {
            if (Game.Instance.app.ticker.lastTime > this.fireIntervalControl.getLastFireTime()) {
                const appTime = Game.Instance.app.ticker.lastTime;
                this.fireIntervalControl.updateLastFireTime(appTime + this.ship.getFireInterval());
                this.ship.attack();
            }
        }
    }
}
