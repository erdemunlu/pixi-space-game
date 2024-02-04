import IAttack from "../../Interfaces/IAttack";
import IAttackStrategy from "../../Interfaces/IAttackStrategy";
import IMove from "../../Interfaces/IMove";
import IMoveStrategy from "../../Interfaces/IMoveStrategy";
import IHittable from "../../Interfaces/IHittable";
import ICollide from "../../Interfaces/ICollide";
import INameable from "../../Interfaces/INameable";
import GameObject from "../../core/GameObject";
import { HitboxCollider } from "../../Helpers/HitboxCollider";

export abstract class Ship extends GameObject implements IAttack, IMove, IHittable, ICollide, INameable {
    attackStrategy!: IAttackStrategy;
    moveStrategy!: IMoveStrategy;
    health: number = 100;
    getHitSoundName: string = "gethit.ogg";
    deathSoundName: string = "death.wav";
    hitboxCollider!: HitboxCollider;
    name!: string;

    constructor() {
        super();
    }
    abstract attack(): void;
    abstract move(delta: number): void;
    abstract getHit(damage: number): void;
}
