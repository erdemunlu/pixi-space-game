import Game from "../Game";
import { GameState } from "../Helpers/GameState";
import { Ship } from "../objects/ships/Ship";

export class EnemyController {
    enemyShips: Ship[] = [];

    constructor(enemyShips: Ship[]) {
        this.enemyShips = enemyShips;
        Game.Instance.app.ticker.add((delta) => this.gameLoop(delta), this);
    }

    gameLoop(delta: number): void {
        if (Game.Instance.stateManager.getCurrentState() === GameState.Playing) {
            this.handleEnemy(delta);
        }
    }

    handleEnemy(delta: number): void {
        for (let i = 0; i < this.enemyShips.length; i++) {
            this.enemyShips[i]?.move(delta);
            this.enemyShips[i]?.attack();
        }
    }
}
