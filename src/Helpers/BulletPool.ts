import Bullet from "../objects/Bullet";
import BulletControl from "../core/BulletControl";


export default class BulletPool {
  static Instance: BulletPool;
  bulletPool: Bullet[];
  bulletAmount: number = 50;

  constructor() {
    BulletPool.Instance = this;
    this.bulletPool = [];

    this.createBulletPool();
  }

  createBulletPool() {
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
        BulletControl.Instance.addBulletToActiveBullets(this.bulletPool[i]);
        return this.bulletPool[i];
      }
    }

    const newBullet = new Bullet();
    this.bulletPool.push(newBullet);
    newBullet.visible = true;
    BulletControl.Instance.addBulletToActiveBullets(newBullet);
    return newBullet;
  }

  getBulletInfo() {
    console.log("Bullets count: " + this.bulletPool.length);
  }
}