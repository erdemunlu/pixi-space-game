import { Point, Sprite, Texture } from "pixi.js";
import IAttackStrategy from "../Interfaces/IAttackStrategy";
import Game from "../Game";
import { Direction } from "../Helpers/Direction";
import FireIntervalControl from "../core/FireIntervalControl";

export default class AttackStrategyOrangeShip implements IAttackStrategy {
    bulletSpriteName: string = "orange_shot.png";
    bulletPoint: Point = new Point(0, -35);
    bulletSpeed: number = 3;
    bulletDamage: number = 50;
    fireInterval: number = 300;
    fireIntervalControl: FireIntervalControl;
    attackSoundName: string = "shot_orange.wav";
    constructor() {
        this.fireIntervalControl = new FireIntervalControl();
    }

    attack(shipPoint: Point): void {
        if (Game.Instance.inputHandler.isKeyDown(" ")) {
            if (this.canAttack()) {
                this.fireIntervalControl.updateLastFireTime(this.fireInterval);
                this.initializeBullet(shipPoint);
                Game.Instance.audioManager.playSound(this.attackSoundName);
            }
        }
    }

    initializeBullet(shipPoint: Point): void {
        const bullet = Game.Instance.levelController.getBulletFromPool();
        const point = new Point(shipPoint.x + this.bulletPoint.x, shipPoint.y + this.bulletPoint.y);

        bullet.initialize(
            new Sprite(Texture.from(this.bulletSpriteName)),
            point,
            Direction.Up,
            this.bulletSpeed,
            this.bulletDamage,
        );
    }
    canAttack(): boolean {
        if (!Game.Instance.player.isAlive()) {
            return false;
        }
        if (Game.Instance.app.ticker.lastTime > this.fireIntervalControl.getLastFireTime()) {
            return true;
        }
        return false;
    }
}
