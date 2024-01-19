export default class InputHandler {
  private keys: { [key: string]: boolean } = {};

  constructor() {
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
  }

  keyDown(event: KeyboardEvent): void {
    this.keys[event.key.toLowerCase()] = true;
  }

  keyUp(event: KeyboardEvent): void {
    this.keys[event.key.toLowerCase()] = false;
  }

  right(): boolean {
    if (this.keys["arrowright"] || this.keys["d"]) {
      return true;
    }
    return false;
  }
  left(): boolean {
    if (this.keys["arrowleft"] || this.keys["a"]) {
      return true;
    }
    return false;
  }
  isKeyDown(key: string): boolean {
    return !!this.keys[key];
  }
}
