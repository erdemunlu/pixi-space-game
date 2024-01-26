import { Ship } from "../objects/ships/Ship";
import OrangeShip from "../objects/ships/OrangeShip";
import Game from "../Game";
import FireIntervalControl from "./FireIntervalControl";

export class Player {
    ship: Ship;
    fireIntervalControl: FireIntervalControl;

    constructor() {
        this.ship = new OrangeShip();
        this.fireIntervalControl = new FireIntervalControl();
        Game.Instance.app.ticker.add(this.gameLoop.bind(this));
    }

    gameLoop() {
        this.ship.move();
        this.ship.attack();
    }

    canAttack(): boolean {
        if (Game.Instance.app.ticker.lastTime > this.fireIntervalControl.getLastFireTime()) {
            return true;
        }
        return false;
    }
}
