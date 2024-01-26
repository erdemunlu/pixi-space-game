import Game from "../Game";
import { EnemyShipWeak } from "../objects/ships/EnemyShipWeak";

export class EnemySpawner {
    enemyShip: EnemyShipWeak;

    constructor() {
        this.enemyShip = new EnemyShipWeak();
        Game.Instance.app.ticker.add(this.gameLoop.bind(this));
    }

    gameLoop() {
        this.enemyShip.move();
    }
}
