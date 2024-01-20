import Bullet from "../objects/Bullet";
import Game from "../Game";
import { Point } from "pixi.js";
export default class BulletControl {
    static Instance: BulletControl;
    activeBullets: Bullet[];

    constructor() {
        BulletControl.Instance = this;
        this.activeBullets = [];
        Game.Instance.app.ticker.add(this.update, this);
    }

    update() {
        for (let i = 0; i < this.activeBullets.length; i++) {
            const bullet = this.activeBullets[i];
            bullet.position = new Point(bullet.position.x, bullet.position.y + bullet.speed * bullet.direction);

            if (bullet.isOutOfScreen()) {
                this.removeBulletFromActiveBullets(i);
                bullet.visible = false;
                //BulletPool.Instance.getBulletInfo();
            }
        }
    }

    addBulletToActiveBullets(bullet: Bullet) {
        this.activeBullets.push(bullet);
    }

    removeBulletFromActiveBullets(index: number) {
        this.activeBullets.splice(index, 1);
    }
}