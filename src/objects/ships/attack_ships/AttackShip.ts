import Ship from "../Ship";
import IAttack from "../../../Interfaces/IAttack";
import IAttackStrategy from "../../../Interfaces/IAttackStrategy";

export default class AttackShip extends Ship implements IAttack {
    attackStrategy!: IAttackStrategy;
    attackDamage!: number;
}
