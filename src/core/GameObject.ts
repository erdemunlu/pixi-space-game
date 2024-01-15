import { Container, IDestroyOptions, Sprite } from "pixi.js";
import Game from "../Game";

export default class GameObject extends Container {
    transformer = new Transformer(this);
    sprite: Sprite;

    constructor() {
        super();
        this.sprite = new Sprite();
    }

    getSprite(): Sprite {
        return this.sprite;
    }

    setSprite(sprite: Sprite) {
        this.removeChild(sprite);

        this.sprite = sprite;

        this.addChild(sprite);

        Game.Instance.app.stage.addChild(this);
    }

    destroy(options: IDestroyOptions) {
        super.destroy(options);
    }
}

class Transformer {
    gameObject: GameObject;

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject;
    }

    get x() {
        return this.gameObject.position.x;
    }

    set x(value: number) {
        this.gameObject.position.x = value;
    }

    get y() {
        return this.gameObject.position.y;
    }

    set y(value: number) {
        this.gameObject.position.y = value;
    }

    get rotation() {
        return this.gameObject.rotation;
    }

    set rotation(value: number) {
        this.gameObject.rotation = value;
    }

    set(x: number, y: number) {
        this.gameObject.position.x = x;
        this.gameObject.position.y = y;
    }
}
