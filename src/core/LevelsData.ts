import Data from "../../assets/LevelData/levels.json";

export class LevelsData {
    levels: Level[];
    constructor() {
        this.levels = [];

        if (!Array.isArray(Data)) {
            throw new Error("Invalid JSON structure: Expected an array.");
        }

        Data.forEach((level, index) => {
            // Validate level structure
            if (!level.levelNumber || !Array.isArray(level.ships) || !level.player?.name || !level.player?.health) {
                throw new Error(`Invalid JSON structure at level ${index + 1}.`);
            }

            this.levels.push(level);
            //this.debugLevel(level);
        });
    }

    // Debug a single level
    debugLevel(level: Level): void {
        console.log(`Debugging Level ${level.levelNumber}`);

        // Debug ships for the level
        level.ships.forEach(this.debugShip);

        // Debug player for the level
        this.debugPlayer(level.player);
    }

    // Debug a single ship
    debugShip(ship: Ship): void {
        console.log(
            `Ship Name: ${ship.name}, 
      Health: ${ship.health}, 
      Speed: ${ship.speed},
      Direction: ${ship.direction}, 
      PositionX: ${ship.position.x}, 
      PositionY: ${ship.position.y}`,
        );
    }

    //Debug Player
    debugPlayer(player: Player): void {
        console.log(
            `Ship name: ${player.name},
            Health: ${player.health}`,
        );
    }
}

class Ship {
    name: string;
    health: number;
    speed: number;
    direction: number;
    position: {
        x: number;
        y: number;
    };
    constructor(name: string, health: number, speed: number, direction: number, position: { x: number; y: number }) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.direction = direction;
        this.position = position;
    }
}
class Player {
    name: string;
    health: number;
    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }
}

class Level {
    levelNumber: number;
    ships: Ship[];
    player: Player;
    constructor(levelNumber: number, ships: Ship[], player: Player) {
        this.levelNumber = levelNumber;
        this.ships = ships;
        this.player = player;
    }
}
