import { Point, Sprite, Texture } from "pixi.js";
import IAttackStrategy from "../Interfaces/IAttackStrategy";
import Game from "../Game";
import Bullet from "../objects/Bullet";
import { Direction } from "../Helpers/Direction";

export default class AttackStrategyOrangeShip implements IAttackStrategy {
    bulletSpriteName: string = "orange_shot.png";
    bulletPoint: Point = new Point(0, -35);
    bulletSpeed: number = 3;
    bulletDamage: number = 50;
    fireInterval: number = 300;
    attackSoundName: string = "shot_orange.wav";

    attack(): void {
        if (Game.Instance.inputHandler.isKeyDown(" ")) {
            if (Game.Instance.player.canAttack()) {
                Game.Instance.player.fireIntervalControl.updateLastFireTime(this.fireInterval);
                const bullet = Game.Instance.levelController.getBulletFromPool();
                this.initializeBullet(bullet);
                Game.Instance.audioManager.playSound(this.attackSoundName);
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
