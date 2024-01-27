import Game from "../Game";
import { EnemyShipWeak } from "../objects/ships/EnemyShipWeak";
import { Ship } from "../objects/ships/Ship";

export class EnemySpawner {
    enemyShip: Ship;

    constructor() {
        this.enemyShip = new EnemyShipWeak();
        Game.Instance.app.ticker.add(this.gameLoop.bind(this));
    }

    gameLoop() {
        this.enemyShip.move();
    }
}
