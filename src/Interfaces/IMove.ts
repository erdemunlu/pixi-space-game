import IMoveStrategy from "./IMoveStrategy";

export default interface IMove {
    moveStrategy: IMoveStrategy;
    move(number: number): void;
}
