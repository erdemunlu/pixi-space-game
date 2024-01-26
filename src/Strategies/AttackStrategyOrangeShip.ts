import { Point, Sprite, Texture } from "pixi.js";
import IAttackStrategy from "../Interfaces/IAttackStrategy";
import Game from "../Game";
import Bullet from "../objects/Bullet";
import BulletPool from "../Helpers/BulletPool";
import { Direction } from "../Helpers/Direction";

export default class AttackStrategyOrangeShip implements IAttackStrategy {
    bulletSpriteName: string = "orange_shot.png";
    bulletPoint: Point = new Point(-7, -35);
    bulletSpeed: number = 3;
    bulletDamage: number = 50;
    fireInterval: number = 300;

    attack(): void {
        if (Game.Instance.inputHandler.isKeyDown(" ")) {
            if (Game.Instance.player.canAttack()) {
                Game.Instance.player.fireIntervalControl.updateLastFireTime(this.fireInterval);
                const bullet = BulletPool.Instance.getBulletFromPool();
                this.initializeBullet(bullet);
            }
        }
    }

    initializeBullet(bullet: Bullet): void {
        const point = new Point(
            Game.Instance.player.ship.position.x + this.bulletPoint.x,
            Game.Instance.player.ship.position.y + this.bulletPoint.y,
        );

        bullet.initialize(
            new Sprite(Texture.from(this.bulletSpriteName)),
            point,
            Direction.Up,
            this.bulletSpeed,
            this.bulletDamage,
        );
    }
}
