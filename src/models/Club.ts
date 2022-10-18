import { ClubData } from "../types/ClubData";

export class Club {
    badgeID: number;
    description: string;
    members: { tag: string, name: string, nameColor: string, role: string, trophies: number, icon: { id: number } }[]
    name: string;
    requiredTrophies: number;
    tag: string;
    trophies: number;
    type: string;

    constructor(data: ClubData) {
        this.badgeID = data.badgeID;
        this.description = data.description;
        this.members = data.members;
        this.name = data.name;
        this.requiredTrophies = data.requiredTrophies;
        this.tag = data.tag;
        this.trophies = data.trophies;
        this.type = data.type;
    }
}