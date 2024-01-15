import IAttackStrategy from "../Interfaces/IAttackStrategy";

export default class AttackStrategyOrangeShip implements IAttackStrategy {
    attack(): void {
        console.log("ATTAACK ORANGE");
    }
}
