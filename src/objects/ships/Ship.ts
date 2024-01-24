import IAttack from "../../Interfaces/IAttack";
import IAttackStrategy from "../../Interfaces/IAttackStrategy";
import IMove from "../../Interfaces/IMove";
import IMoveStrategy from "../../Interfaces/IMoveStrategy";
import IHittable from "../../Interfaces/IHittable";
import GameObject from "../../core/GameObject";

export abstract class Ship extends GameObject implements IAttack, IMove, IHittable {
    attackStrategy!: IAttackStrategy;
    moveStrategy!: IMoveStrategy;
    health!: number;

    constructor() {
        super();
    }

    abstract attack(): void;
    abstract move(number: number): void;
    abstract getHit(damage: number): void;
}
