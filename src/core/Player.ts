import { Ship } from "../objects/ships/Ship";
import Game from "../Game";
import { GameState } from "../Helpers/GameState";

export class Player {
    ship!: Ship;
    constructor() {
        Game.Instance.app.ticker.add((delta) => this.gameLoop(delta), this);
    }

    initializeShip(ship: Ship): void {
        this.ship = ship;
    }
    gameLoop(delta: number): void {
        if (Game.Instance.stateManager.getCurrentState() !== GameState.Playing) {
            return;
        }
        this.ship?.move(delta);
        this.ship?.attack();
    }
    isAlive(): boolean {
        if (this.ship.health <= 0) {
            return false;
        }

        return true;
    }
}
