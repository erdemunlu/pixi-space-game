import { Point, Sprite, Texture, Text } from "pixi.js";
import { ProgressBar } from "./ProgressBar";

export class HealthProgressBar extends ProgressBar {
    healthBarSprite = new Sprite(Texture.from("health-bar.png"));
    healthBarFillSprite = new Sprite(Texture.from("health-bar-fill.png"));
    healthBarFillUpdateTransitionDuration = 0.3;
    constructor(initialHealthAmount: number, progressBarPoint: Point, parent: Sprite) {
        super();
        this.barSprite = this.healthBarSprite;
        this.barFillSprite = this.healthBarFillSprite;
        this.maxFillAmount = initialHealthAmount;
        this.transitionDuration = this.healthBarFillUpdateTransitionDuration;
        this.point = progressBarPoint;
        this.parent = parent;
        this.barFillWidth = this.healthBarFillSprite.width;
        this.fillAmountText = new Text("");
        this.initializeProgressBar();
        this.addProgressBarAsChild();
    }
}
