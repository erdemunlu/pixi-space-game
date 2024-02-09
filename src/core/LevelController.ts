import { EnemyController } from "./EnemyController";
import { EnemyShipWeak } from "../objects/ships/EnemyShipWeak";
import { EnemyShipStrong } from "../objects/ships/EnemyShipStrong";
import { LevelsData } from "./LevelsData";
import { BulletController } from "./BulletController";
import { BulletPool } from "../Helpers/BulletPool";
import Bullet from "../objects/Bullet";
import { Ship } from "../objects/ships/Ship";
import Game from "../Game";
import { GameState } from "../Helpers/GameState";
import OrangeShip from "../objects/ships/OrangeShip";
import GreenShip from "../objects/ships/GreenShip";
import BlueShip from "../objects/ships/BlueShip";

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

    updateCurrentLevel(isSuccessful: boolean): void {
        if (isSuccessful) {
            this.currentLevel += 1;
        }
    }
    getMaxLevelNumber(): number {
        return this.levelsData.levels.length;
    }
    resetLevelProgress(): void {
        this.currentLevel = 1;
    }

    initializeLevel(): void {
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
            } else if (levelData.ships[i].name === EnemyShipStrong.name) {
                const shipData = levelData.ships[i];
                const newEnemyShip = new EnemyShipStrong(
                    shipData.health,
                    shipData.speed,
                    shipData.direction,
                    shipData.position,
                );
                ships.push(newEnemyShip);
            }
        }
        if (levelData.player.name === OrangeShip.name) {
            const playerShip = new OrangeShip(levelData.player.health);
            Game.Instance.player.initializeShip(playerShip);
        } else if (levelData.player.name === GreenShip.name) {
            const playerShip = new GreenShip(levelData.player.health);
            Game.Instance.player.initializeShip(playerShip);
        } else if (levelData.player.name === BlueShip.name) {
            const playerShip = new BlueShip(levelData.player.health);
            Game.Instance.player.initializeShip(playerShip);
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

    finalizeLevel(isSuccessful: boolean): void {
        Game.Instance.stateManager.setState(GameState.Menu);
        this.updateCurrentLevel(isSuccessful);
        Game.Instance.menuManager.handleMenuAfterLevel(isSuccessful);
    }
}
