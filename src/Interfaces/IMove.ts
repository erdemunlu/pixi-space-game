import IMoveStrategy from "./IMoveStrategy";

export default interface IMove {
    moveStrategy: IMoveStrategy;
    move(delta: number): void;
}
