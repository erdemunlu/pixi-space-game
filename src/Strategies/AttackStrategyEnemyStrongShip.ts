import { Point, Sprite, Texture } from "pixi.js";
import IAttackStrategy from "../Interfaces/IAttackStrategy";
import { Direction } from "../Helpers/Direction";
import Game from "../Game";
import FireIntervalControl from "../core/FireIntervalControl";

export class AttackStrategyEnemyStrongShip implements IAttackStrategy {
    bulletSpriteName: string = "yellow_strong_thin_shot.png";
    bulletPoint: Point = new Point(-30, 70);
    bulletSpeed: number = 2;
    bulletDamage: number = 60;
    fireInterval: number = 2000;
    attackSoundName: string = "shot_enemy_strong.wav";
    attackSoundVolume: number = 0.5;
    fireIntervalControl: FireIntervalControl;
    constructor() {
        this.fireIntervalControl = new FireIntervalControl();
    }

    attack(shipPoint: Point): void {
        if (Game.Instance.app.ticker.lastTime > this.fireIntervalControl.getLastFireTime()) {
            this.fireIntervalControl.updateLastFireTime(this.fireInterval);
            this.initializeBullet(shipPoint);
            Game.Instance.audioManager.playSound(this.attackSoundName, this.attackSoundVolume);
        }
    }
    initializeBullet(shipPoint: Point): void {
        for (let i = -1; i < 2; i += 2) {
            const bullet = Game.Instance.levelController.getBulletFromPool();
            const point = new Point(shipPoint.x + this.bulletPoint.x * i, shipPoint.y + this.bulletPoint.y);

            bullet.initialize(
                new Sprite(Texture.from(this.bulletSpriteName)),
                point,
                Direction.Down,
                this.bulletSpeed,
                this.bulletDamage,
            );
            bullet.sprite.rotation = Math.PI;
        }
    }
}
