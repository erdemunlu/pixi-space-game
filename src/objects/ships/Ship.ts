import IAttack from "../../Interfaces/IAttack";
import IAttackStrategy from "../../Interfaces/IAttackStrategy";
import IMove from "../../Interfaces/IMove";
import IMoveStrategy from "../../Interfaces/IMoveStrategy";
import IHittable from "../../Interfaces/IHittable";
import INameable from "../../Interfaces/INameable";
import GameObject from "../../core/GameObject";

export abstract class Ship extends GameObject implements IAttack, IMove, IHittable, INameable {
    attackStrategy!: IAttackStrategy;
    moveStrategy!: IMoveStrategy;
    health!: number;
    name!: string;

    constructor() {
        super();
    }

    abstract attack(): void;
    abstract move(): void;
    abstract getHit(damage: number): void;
}
