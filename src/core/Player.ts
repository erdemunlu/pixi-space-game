import { Ship } from "../objects/ships/Ship";
import Game from "../Game";
import { GameState } from "../Helpers/GameState";

export class Player {
    ship!: Ship;
    constructor() {
        Game.Instance.app.ticker.add(this.gameLoop.bind(this));
    }

    initializeShip(ship: Ship) {
        this.ship = ship;
    }
    gameLoop() {
        if (Game.Instance.stateManager.getCurrentState() !== GameState.Playing) {
            return;
        }
        this.ship?.move();
        this.ship?.attack();
    }
    isAlive(): boolean {
        if (this.ship.health <= 0) {
            return false;
        }

        return true;
    }
}
