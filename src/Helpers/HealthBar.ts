import { Point, Sprite, Texture, Text } from "pixi.js";
import gsap from "gsap";
import { defaultTextStyle } from "../Helpers/styles";

export class HealthBar {
    private initialHealth: number;
    private parent: Sprite;
    private point: Point;
    private healthBarSprite!: Sprite;
    private healthBarFillSprite!: Sprite;
    private initialBarFillWidth!: number;
    private healthText!: Text;

    constructor(initialHealth: number, parent: Sprite, point: Point) {
        this.initialHealth = initialHealth;
        this.parent = parent;
        this.point = point;

        this.initializeProgressBar();
        this.addHealthBarAsChild();
    }

    initializeProgressBar() {
        this.healthBarSprite = new Sprite(Texture.from("health-bar.png"));
        this.healthBarFillSprite = new Sprite(Texture.from("health-bar-fill.png"));
        this.initialBarFillWidth = this.healthBarFillSprite.width;

        this.healthBarSprite.anchor.set(0.5, 0.5);
        this.healthBarFillSprite.anchor.set(0, 0.5);
        this.healthBarSprite.addChild(this.healthBarFillSprite);
        this.healthBarFillSprite.position.set(this.healthBarSprite.position.x - 40, this.healthBarSprite.position.y);

        this.healthText = new Text(this.initialHealth);
        this.healthText.anchor.set(0.5, 0.5);
        this.healthText.style = defaultTextStyle;
        this.healthBarSprite.addChild(this.healthText);
    }
    updateHealthBar(newHealth: number) {
        const fillWidth = (newHealth / this.initialHealth) * this.initialBarFillWidth;
        gsap.fromTo(
            this.healthBarFillSprite,
            { width: this.healthBarFillSprite.width },
            { width: fillWidth, duration: 0.3 },
        );
        this.healthText.text = `${newHealth}`;
    }
    addHealthBarAsChild() {
        this.parent.addChild(this.healthBarSprite);
        this.healthBarSprite.position.set(this.point.x, this.point.y);
    }
}
