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
            if (!level.levelNumber || !Array.isArray(level.ships)) {
                throw new Error(`Invalid JSON structure at level ${index + 1}.`);
            }

            this.levels.push(level);
            this.debugLevel(level);
        });
    }

    // Debug a single level
    debugLevel(level: Level): void {
        console.log(`Debugging Level ${level.levelNumber}`);

        // Debug ships for the level
        level.ships.forEach(this.debugShip);
    }

    // Debug a single ship
    debugShip(ship: Ship): void {
        console.log(
            `Ship Type: ${ship.name}, 
      Health: ${ship.health}, 
      Speed: ${ship.speed},
      Direction: ${ship.direction}, 
      PositionX: ${ship.position.x}, 
      PositionY: ${ship.position.y}`,
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

class Level {
    levelNumber: number;
    ships: Ship[];
    constructor(levelNumber: number, ships: Ship[]) {
        this.levelNumber = levelNumber;
        this.ships = ships;
    }
}
