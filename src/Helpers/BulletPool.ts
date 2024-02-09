import Bullet from "../objects/Bullet";

export class BulletPool {
    bulletPool: Bullet[] = [];
    bulletAmount: number = 50;

    constructor() {
        this.createBulletPool();
    }

    createBulletPool(): void {
        let bullet: Bullet;
        for (let i = 0; i < this.bulletAmount; i++) {
            bullet = new Bullet();
            bullet.visible = false;
            this.bulletPool.push(bullet);
        }
    }

    getBulletFromPool(): Bullet {
        for (let i = 0; i < this.bulletPool.length; i++) {
            if (!this.bulletPool[i].visible) {
                this.bulletPool[i].visible = true;
                return this.bulletPool[i];
            }
        }

        const newBullet = new Bullet();
        this.bulletPool.push(newBullet);
        newBullet.visible = true;
        return newBullet;
    }

    getBulletInfo(): void {
        console.log("Bullets count: " + this.bulletPool.length);
    }
}
