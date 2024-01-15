import IAttackStrategy from "./IAttackStrategy";

export default interface IAttack {
    attackStrategy: IAttackStrategy;
    attackDamage: number;
}
