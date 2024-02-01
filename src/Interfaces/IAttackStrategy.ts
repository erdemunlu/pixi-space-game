import { Point } from "pixi.js";
import FireIntervalControl from "../core/FireIntervalControl";

export default interface IAttackStrategy {
    bulletSpriteName: string;
    bulletPoint: Point;
    bulletSpeed: number;
    bulletDamage: number;
    fireInterval: number;
    attackSoundName: string;
    fireIntervalControl: FireIntervalControl;
    attack(shipPoint: Point): void;
}
