import { Point, Sprite, Texture } from "pixi.js";
import IAttackStrategy from "../Interfaces/IAttackStrategy";
import Bullet from "../objects/Bullet";
import { Direction } from "../Helpers/Direction";
import { EnemyShipWeak } from "../objects/ships/EnemyShipWeak";
import Game from "../Game";

export class AttackStrategyEnemyWeakShip implements IAttackStrategy {
    bulletSpriteName: string = "blue_shot.png";
    bulletPoint: Point = new Point(0, 70);
    bulletSpeed: number = 1;
    bulletDamage: number = 50;
    fireInterval: number = 2000;
    ship: EnemyShipWeak;
    constructor(ship: EnemyShipWeak) {
        this.ship = ship;
    }

    attack(): void {
        if (Game.Instance.app.ticker.lastTime > this.ship.fireIntervalControl.getLastFireTime()) {
            this.ship.fireIntervalControl.updateLastFireTime(this.fireInterval);
            const bullet = Game.Instance.levelController.getBulletFromPool();
            this.initializeBullet(bullet);
        }
    }
    initializeBullet(bullet: Bullet): void {
        const point = new Point(this.ship.position.x + this.bulletPoint.x, this.ship.position.y + this.bulletPoint.y);

        bullet.initialize(
            new Sprite(Texture.from(this.bulletSpriteName)),
            point,
            Direction.Down,
            this.bulletSpeed,
            this.bulletDamage,
        );
    }
}
