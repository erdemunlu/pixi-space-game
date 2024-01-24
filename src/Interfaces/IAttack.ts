import IAttackStrategy from "./IAttackStrategy";

export default interface IAttack {
    attackStrategy: IAttackStrategy;
    attack(): void;
    getFireInterval(): number;
}
