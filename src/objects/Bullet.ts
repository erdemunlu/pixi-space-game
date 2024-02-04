import { HitboxCollider } from "../Helpers/HitboxCollider";
import ICollide from "../Interfaces/ICollide";
import GameObject from "../core/GameObject";
import { Point, Sprite } from "pixi.js";

export default class Bullet extends GameObject implements ICollide {
    direction!: number;
    speed!: number;
    damage!: number;
    point!: Point;
    hitboxCollider!: HitboxCollider;

    constructor() {
        super();
    }

    initialize(sprite: Sprite, point: Point, direction: number, speed: number, damage: number) {
        this.setSprite(sprite);
        this.sprite.anchor.set(0.5, 0.5);
        this.point = point;
        this.position = point;
        this.direction = direction;
        this.speed = speed;
        this.damage = damage;
        this.hitboxCollider = new HitboxCollider(this.point, this.sprite.width, this.sprite.height);
    }
}
