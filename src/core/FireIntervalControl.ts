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

    updateLastFireTime(newLastFireTime: number): void {
        this._lastFireTime = newLastFireTime;
    }
}
