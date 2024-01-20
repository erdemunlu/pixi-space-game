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

    isOutOfScreen(): boolean {
        const screenWidth = Game.Instance.world.width;
        const screenHeight = Game.Instance.world.height;

        return this.x < 0 || this.x > screenWidth || this.y < 0 || this.y > screenHeight;
    }

    clampPositionToScreen(): void {
        const screenWidth = Game.Instance.world.width;

        if (this.position.x < this.width) {
            this.position.x = this.width;
        }

        if (this.position.x > screenWidth - this.width) {
            this.position.x = screenWidth - this.width;
        }
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
