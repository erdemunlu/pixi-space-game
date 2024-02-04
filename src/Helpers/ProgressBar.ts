import { Point, Sprite, Text } from "pixi.js";
import gsap from "gsap";
import { defaultTextStyle } from "./styles";

export abstract class ProgressBar {
    protected barSprite!: Sprite;
    protected barFillSprite!: Sprite;
    protected maxFillAmount!: number;
    protected transitionDuration!: number;
    protected point!: Point;
    protected parent!: Sprite;
    protected barFillWidth!: number;
    protected fillAmountText!: Text;

    protected initializeProgressBar(): void {
        this.barSprite.anchor.set(0.5, 0.5);
        this.barFillSprite.anchor.set(0, 0.5);
        this.barSprite.addChild(this.barFillSprite);
        this.barFillSprite.position.set(
            this.barSprite.position.x - this.barFillSprite.width / 2,
            this.barSprite.position.y,
        );

        this.fillAmountText.text = `${this.maxFillAmount}`;
        this.fillAmountText.anchor.set(0.5, 0.5);
        this.fillAmountText.style = defaultTextStyle;
        this.barSprite.addChild(this.fillAmountText);
    }
    protected addProgressBarAsChild(): void {
        this.parent.addChild(this.barSprite);
        this.barSprite.position.set(this.point.x, this.point.y);
    }
    updateFillAmount(newFillAmount: number): void {
        const fillWidth = (newFillAmount / this.maxFillAmount) * this.barFillWidth;
        gsap.fromTo(
            this.barFillSprite,
            { width: this.barFillSprite.width },
            { width: fillWidth, duration: this.transitionDuration },
        );
        this.fillAmountText.text = `${newFillAmount}`;
    }
}
