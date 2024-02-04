import { Point } from "pixi.js";

export class HitboxCollider {
    point: Point;
    width: number;
    height: number;
    constructor(point: Point, width: number, height: number) {
        this.point = point;
        this.width = width;
        this.height = height;
        this.point = new Point(this.point.x - this.width / 2, this.point.y);
    }
    updatePoint(point: Point): void {
        this.point = point;
    }

    isCollidingWith(targetHitboxCollider: HitboxCollider): boolean {
        return (
            this.point.x < targetHitboxCollider.point.x + targetHitboxCollider.width &&
            this.point.x + this.width > targetHitboxCollider.point.x &&
            this.point.y < targetHitboxCollider.point.y + targetHitboxCollider.height &&
            this.point.y + this.height > targetHitboxCollider.point.y
        );
    }
}
