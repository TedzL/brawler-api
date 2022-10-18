export class BattleLog {
    battles: {
        battleTime: string;
        event: {},
        battle: {},
    }[];

    constructor(data: {
        battleTime: string;
        event: {},
        battle: {},
    }[]) {
        this.battles = data;
    }
}