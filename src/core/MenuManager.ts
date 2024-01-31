import { Text } from "pixi.js";
import Game from "../Game";
import { GameState } from "../Helpers/GameState";
import { defaultTextStyle, defaultBigTextStyle } from "../Helpers/styles";

export class MenuManager {
    startText: Text = new Text("START");
    currentLevelText: Text = new Text(`Level ${Game.Instance.levelController.getCurrentLevel()}`);
    restartText: Text = new Text("Restart");

    constructor() {
        this.initializeMenu();
    }

    initializeMenu(): void {
        this.initializeStartText();
        this.initializeCurrentLevelText();
        this.initializeRestartText();
    }

    initializeStartText(): void {
        this.startText.interactive = true;
        this.startText.style = defaultBigTextStyle;
        this.startText.anchor.set(0.5, 0.5);
        this.startText.position.set(400, 300);
        this.startText.on("pointerdown", () => {
            this.onStartClicked();
            this.startText.visible = false;
            this.startText.interactive = false;
            this.currentLevelText.visible = false;
        });
        Game.Instance.app.stage.addChild(this.startText);
    }

    onStartClicked(): void {
        Game.Instance.stateManager.setState(GameState.Playing);
        Game.Instance.player.initializeShip();
        Game.Instance.levelController.initializeLevel();
    }
    initializeCurrentLevelText(): void {
        this.currentLevelText.style = defaultTextStyle;
        this.currentLevelText.interactive = false;
        this.currentLevelText.anchor.set(0.5, 0.5);
        this.currentLevelText.position.set(400, 200);
        Game.Instance.app.stage.addChild(this.currentLevelText);
    }
    initializeRestartText() {
        this.restartText.style = defaultTextStyle;
        this.restartText.anchor.set(0.5, 0.5);
        this.restartText.position.set(400, 400);
        this.restartText.visible = false;
        this.restartText.on("pointerdown", () => {
            this.onRestartClicked();
            this.restartText.interactive = false;
            this.restartText.visible = false;
            this.startText.text = "START!";
        });
        Game.Instance.app.stage.addChild(this.restartText);
    }
    onRestartClicked() {
        Game.Instance.levelController.resetLevelProgress();
        this.initializeNewLevelMenu();
    }

    initializeNewLevelMenu(): void {
        const currentLevel = Game.Instance.levelController.getCurrentLevel();
        const maxLevel = Game.Instance.levelController.getMaxLevelNumber();

        if (currentLevel > maxLevel) {
            this.startText.text = "FINAL!";
            this.startText.interactive = false;
            this.restartText.visible = true;
            this.restartText.interactive = true;
        } else {
            this.currentLevelText.text = `Level ${currentLevel}`;
            this.currentLevelText.visible = true;
            this.startText.interactive = true;
        }
        this.startText.visible = true;
    }
    initializeSameLevelMenu(): void {
        this.currentLevelText.visible = true;
        this.startText.visible = true;
        this.startText.interactive = true;
    }
    handleMenuAfterLevel(isSuccessful: boolean): void {
        Game.Instance.player.healthText.visible = false;
        if (isSuccessful) {
            this.initializeNewLevelMenu();
        } else {
            this.initializeSameLevelMenu();
        }
    }
}