import Game from "../Game";
import { GameState } from "../Helpers/GameState";
import { Ship } from "../objects/ships/Ship";

export class EnemyController {
    enemyShips: Ship[] = [];

    constructor(enemyShips: Ship[]) {
        this.enemyShips = enemyShips;
        Game.Instance.app.ticker.add(this.gameLoop.bind(this));
    }

    gameLoop() {
        if (Game.Instance.stateManager.getCurrentState() === GameState.Playing) {
            this.handleEnemy();
        }
    }

    handleEnemy() {
        for (let i = 0; i < this.enemyShips.length; i++) {
            this.enemyShips[i]?.move();
            this.enemyShips[i]?.attack();
        }
    }
}
