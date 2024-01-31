import { EnemyController } from "./EnemyController";
import { EnemyShipWeak } from "../objects/ships/EnemyShipWeak";
import { LevelsData } from "./LevelsData";
import { BulletController } from "./BulletController";
import { BulletPool } from "../Helpers/BulletPool";
import Bullet from "../objects/Bullet";
import { Ship } from "../objects/ships/Ship";
import Game from "../Game";
import { GameState } from "../Helpers/GameState";

export class LevelController {
    levelsData: LevelsData;
    currentLevel: number = 1;
    bulletPool: BulletPool;
    enemyController!: EnemyController;
    bulletController!: BulletController;

    constructor() {
        this.levelsData = new LevelsData();
        this.bulletPool = new BulletPool();
    }

    updateCurrentLevel(isSuccessful: boolean) {
        if (isSuccessful) {
            this.currentLevel += 1;
        }
    }
    getMaxLevelNumber() {
        return this.levelsData.levels.length;
    }
    resetLevelProgress() {
        this.currentLevel = 1;
    }

    initializeLevel() {
        const ships: Ship[] = [];
        const levelData = this.levelsData.levels[this.currentLevel - 1];
        for (let i = 0; i < levelData.ships.length; i++) {
            if (levelData.ships[i].name === EnemyShipWeak.name) {
                const shipData = levelData.ships[i];
                const newEnemyShip = new EnemyShipWeak(
                    shipData.health,
                    shipData.speed,
                    shipData.direction,
                    shipData.position,
                );
                ships.push(newEnemyShip);
            }
        }

        this.enemyController = new EnemyController(ships);
        this.bulletController = new BulletController(ships);
    }

    getBulletFromPool(): Bullet {
        const bullet = this.bulletPool.getBulletFromPool();
        this.bulletController.addBulletToActiveBullets(bullet);
        return bullet;
    }
    getCurrentLevel(): number {
        return this.currentLevel;
    }

    finalizeLevel(isSuccessful: boolean) {
        Game.Instance.stateManager.setState(GameState.Menu);
        this.updateCurrentLevel(isSuccessful);
        Game.Instance.menuManager.handleMenuAfterLevel(isSuccessful);
    }
}