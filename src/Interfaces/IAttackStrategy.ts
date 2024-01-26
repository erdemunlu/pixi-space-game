import { Point } from "pixi.js";
import Bullet from "../objects/Bullet";

export default interface IAttackStrategy {
    bulletSpriteName: string;
    bulletPoint: Point;
    bulletSpeed: number;
    bulletDamage: number;
    fireInterval: number;
    attack(): void;
    initializeBullet(bullet: Bullet): void;
}
