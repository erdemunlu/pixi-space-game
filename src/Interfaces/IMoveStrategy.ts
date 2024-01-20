export default interface IMoveStrategy {
    speed: number;
    move(direction: number): void;
}
