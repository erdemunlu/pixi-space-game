import { Point, Sprite } from "pixi.js";
import IAttackStrategy from "../Interfaces/IAttackStrategy";
import Game from "../Game";
import Bullet from "../objects/Bullet";
import BulletPool from "../Helpers/BulletPool";
import { Direction } from "../Helpers/Direction";

export default class AttackStrategyOrangeShip implements IAttackStrategy {
    bulletSpritePath: string = "assets/shots/orange_shot.png";
    bulletPoint: Point = new Point(-7, -35);
    bulletSpeed: number = 3;
    bulletDamage: number = 50;
    fireInterval: number = 300;

    attack(): void {
        const bullet = BulletPool.Instance.getBulletFromPool();
        this.initializeBullet(bullet);
    }

    initializeBullet(bullet: Bullet): void {
        const point = new Point(
            Game.Instance.player.ship.position.x + this.bulletPoint.x,
            Game.Instance.player.ship.position.y + this.bulletPoint.y,
        );

        bullet.initialize(Sprite.from(this.bulletSpritePath), point, Direction.Up, this.bulletSpeed, this.bulletDamage);
    }
}
