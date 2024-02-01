import { Point, Sprite, Texture } from "pixi.js";
import IAttackStrategy from "../Interfaces/IAttackStrategy";
import { Direction } from "../Helpers/Direction";
import Game from "../Game";
import FireIntervalControl from "../core/FireIntervalControl";

export class AttackStrategyEnemyWeakShip implements IAttackStrategy {
    bulletSpriteName: string = "blue_shot.png";
    bulletPoint: Point = new Point(0, 70);
    bulletSpeed: number = 1;
    bulletDamage: number = 50;
    fireInterval: number = 2000;
    attackSoundName: string = "shot_enemy_weak.wav";
    fireIntervalControl: FireIntervalControl;
    constructor() {
        this.fireIntervalControl = new FireIntervalControl();
    }

    attack(shipPoint: Point): void {
        if (Game.Instance.app.ticker.lastTime > this.fireIntervalControl.getLastFireTime()) {
            this.fireIntervalControl.updateLastFireTime(this.fireInterval);
            this.initializeBullet(shipPoint);
            Game.Instance.audioManager.playSound(this.attackSoundName);
        }
    }
    initializeBullet(shipPoint: Point): void {
        const bullet = Game.Instance.levelController.getBulletFromPool();
        const point = new Point(shipPoint.x + this.bulletPoint.x, shipPoint.y + this.bulletPoint.y);

        bullet.initialize(
            new Sprite(Texture.from(this.bulletSpriteName)),
            point,
            Direction.Down,
            this.bulletSpeed,
            this.bulletDamage,
        );
    }
}
