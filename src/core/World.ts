import { Sprite, Texture } from "pixi.js";
import GameObject from "./GameObject";

export default class World extends GameObject {
    constructor() {
        super();
        this.setSprite(new Sprite(Texture.from("background.png")));
    }
}
