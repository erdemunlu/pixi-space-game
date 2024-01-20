import Ship from "../Ship";
import IAttack from "../../../Interfaces/IAttack";
import IAttackStrategy from "../../../Interfaces/IAttackStrategy";
import IMove from "../../../Interfaces/IMove";
import IMoveStrategy from "../../../Interfaces/IMoveStrategy";

export default class AttackShip extends Ship implements IAttack, IMove {
    attackStrategy!: IAttackStrategy;
    moveStrategy!: IMoveStrategy;
}
