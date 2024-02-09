import Bullet from "../objects/Bullet";
import Game from "../Game";
import { Point } from "pixi.js";
import { Ship } from "../objects/ships/Ship";
import { GameState } from "../Helpers/GameState";

export class BulletController {
    activeBullets: Bullet[];
    activeShips: Ship[];

    constructor(activeShips: Ship[]) {
        this.activeBullets = [];
        this.activeShips = activeShips;
        this.activeShips.push(Game.Instance.player.ship);
        Game.Instance.app.ticker.add((delta) => this.update(delta), this);
    }

    update(delta: number): void {
        if (Game.Instance.stateManager.getCurrentState() === GameState.Playing) {
            this.handleBulletMovement(delta);
            this.handleCollision();
        } else {
            for (let i = 0; i < this.activeBullets.length; i++) {
                this.removeBulletFromActiveBullets(i);
            }
            for (let i = 0; i < this.activeShips.length; i++) {
                this.removeShipFromActiveShips(i);
            }
        }
    }

    addBulletToActiveBullets(bullet: Bullet): void {
        this.activeBullets.push(bullet);
    }

    removeBulletFromActiveBullets(index: number): void {
        this.activeBullets[index].visible = false;
        this.activeBullets[index].transformer.set(-100, 0);
        this.activeBullets.splice(index, 1);
    }
    removeShipFromActiveShips(index: number): void {
        const ship = this.activeShips[index];
        this.activeShips.splice(index, 1);
        ship.visible = false;
    }

    getShips(ships: Ship[]): void {
        this.activeShips = ships;
    }

    handleBulletMovement(delta: number): void {
        for (let i = 0; i < this.activeBullets.length; i++) {
            const bullet = this.activeBullets[i];
            bullet.position = new Point(bullet.position.x, bullet.position.y + bullet.speed * bullet.direction * delta);
            bullet.hitboxCollider.updatePoint(
                new Point(bullet.position.x - bullet.hitboxCollider.width / 2, bullet.position.y),
            );
            if (bullet.isOutOfScreen()) {
                this.removeBulletFromActiveBullets(i);
                //Game.Instance.levelController.bulletPool.getBulletInfo();
            }
        }
    }

    handleCollision(): void {
        for (let i = 0; i < this.activeBullets.length; i++) {
            for (let j = 0; j < this.activeShips.length; j++) {
                if (this.activeBullets[i]?.hitboxCollider.isCollidingWith(this.activeShips[j]?.hitboxCollider)) {
                    this.activeShips[j].getHit(this.activeBullets[i].damage);
                    if (this.activeShips[j].health <= 0) {
                        this.removeShipFromActiveShips(j);
                        if (Game.Instance.player.ship.health <= 0) {
                            Game.Instance.levelController.finalizeLevel(false);
                        } else if (this.activeShips.length === 1 && Game.Instance.player.ship.health > 0) {
                            Game.Instance.levelController.finalizeLevel(true);
                        }
                    }
                    this.removeBulletFromActiveBullets(i);
                }
            }
        }
    }
}
