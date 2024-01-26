import Game from "../Game";

export default class FireIntervalControl {
    private _lastFireTime: number;

    constructor() {
        this._lastFireTime = 0;
    }

    getLastFireTime(): number {
        return this._lastFireTime;
    }

    resetLastFireTime(): void {
        this._lastFireTime = 0;
    }

    updateLastFireTime(fireInterval: number): void {
        const appTime = Game.Instance.app.ticker.lastTime;
        this._lastFireTime = appTime + fireInterval;
    }
}
