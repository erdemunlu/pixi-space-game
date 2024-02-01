import { Ship } from "../objects/ships/Ship";
import OrangeShip from "../objects/ships/OrangeShip";
import Game from "../Game";
import { GameState } from "../Helpers/GameState";
import { Text } from "pixi.js";
import { defaultTextStyle } from "../Helpers/styles";

export class Player {
    ship!: Ship;
    healthText: Text = new Text("");
    constructor() {
        this.initializeHealthText();
        Game.Instance.app.ticker.add(this.gameLoop.bind(this));
    }

    gameLoop() {
        if (Game.Instance.stateManager.getCurrentState() !== GameState.Playing) {
            return;
        }
        this.ship?.move();
        this.ship?.attack();
    }
    isAlive(): boolean {
        if (this.ship.health <= 0) {
            return false;
        }

        return true;
    }
    updateHealthText() {
        this.healthText.text = `HEALTH: ${this.ship.health}`;
    }
    initializeShip() {
        this.ship = new OrangeShip();
        this.healthText.text = `HEALTH: ${this.ship.health}`;
        this.healthText.visible = true;
    }
    initializeHealthText() {
        this.healthText.anchor.set(0.5, 0.5);
        this.healthText.transform.position.set(400, 550);
        this.healthText.style = defaultTextStyle;
        Game.Instance.app.stage.addChild(this.healthText);
    }
}
