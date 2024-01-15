import { Sprite } from "pixi.js";
import GameObject from "./GameObject";

export default class World extends GameObject {
    constructor() {
        super();
        this.setSprite(Sprite.from("./assets/worlds/pink_galaxy.png"));
    }
}
