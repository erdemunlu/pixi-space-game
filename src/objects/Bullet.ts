import Game from "../Game";
import GameObject from "../core/GameObject";
import { Point, Sprite } from "pixi.js";

export default class Bullet extends GameObject {
    direction!: number;
    speed!: number;
    damage!: number;
    point!: Point;

    constructor() {
        super();
    }

    initialize(sprite: Sprite, point: Point, direction: number, speed: number, damage: number) {
        this.setSprite(sprite);
        this.point = point;
        this.position = point;
        this.direction = direction;
        this.speed = speed;
        this.damage = damage;
        Game.Instance.app.stage.addChild(this);
    }
}
