import { PlayerBrawlerData } from "../types/PlayerBrawlerData";

export class Player {
    bestRoboRumbleTime: number;
    bestTimeAsBigBrawler: number;
    brawlers: { id: number, name: string, power: number, rank: number, trophies: number, highestTrophies: number, gears: { id: number, name: string, level: number }[], starPowers: { id: number, name: string }[], gadgets: { id: number, name: string }[] }
    club: { tag: string, name: string };
    duoVictories: number;
    expLevel: number;
    expPoints: number;
    highestTrophies: number;
    icon: { id: number };
    isQualifiedFromChampionshipChallenge: boolean;
    name: string;
    nameColor: string;
    soloVictores: number;
    tag: string;
    trioVictories: number;
    trophies: number;

    constructor(data: PlayerBrawlerData) {
        this.bestRoboRumbleTime = data.bestRoboRumbleTime;
        this.bestTimeAsBigBrawler = data.bestTimeAsBigBrawler;
        this.brawlers = data.brawlers;
        this.club = data.club;
        this.duoVictories = data.duoVictories;
        this.expLevel = data.expLevel;
        this.expPoints = data.expPoints;
        this.highestTrophies = data.highestTrophies;
        this.icon = data.icon;
        this.isQualifiedFromChampionshipChallenge = data.isQualifiedFromChampionshipChallenge;
        this.name = data.name;
        this.nameColor = data.nameColor;
        this.soloVictores = data.soloVictores;
        this.tag = data.tag;
        this.trioVictories = data['3vs3Victories'];
        this.trophies = data.trophies;
    }
}