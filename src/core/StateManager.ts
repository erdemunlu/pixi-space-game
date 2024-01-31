import { GameState } from "../Helpers/GameState";

export class StateManager {
    private currentState: GameState;

    constructor(initialState: GameState) {
        this.currentState = initialState;
    }
    public getCurrentState(): GameState {
        return this.currentState;
    }
    public setState(newState: GameState): void {
        this.currentState = newState;
    }
}
