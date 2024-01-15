export default class InputHandler {
    keys: { [key: string]: boolean };

    constructor() {
        this.keys = {
            ArrowRight: false,
            ArrowLeft: false,
            a: false,
            d: false,
        };

        window.addEventListener("keydown", this.keyDown.bind(this));
        window.addEventListener("keyup", this.keyUp.bind(this));
    }

    keyDown(event: KeyboardEvent): void {
        this.keys[event.key] = true;
    }

    keyUp(event: KeyboardEvent): void {
        this.keys[event.key] = false;
    }

    right(): boolean {
        if (this.keys["ArrowRight"] || this.keys["d"]) {
            return true;
        }
        return false;
    }
    left(): boolean {
        if (this.keys["ArrowLeft"] || this.keys["a"]) {
            return true;
        }
        return false;
    }
}
