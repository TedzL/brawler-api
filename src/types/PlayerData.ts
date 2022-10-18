export type PlayerData = {
    bestRoboRumbleTime: number;
    bestTimeAsBigBrawler: number;
    brawlers: { id: number, name: string, power: number, rank: number, trophies: number, highestTrophies: number, gears: { id: number, name: string, level: number }[], starPowers: { id: number, name: string }[], gadgets: { id: number, name: string }[] }[]
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
    '3vs3Victories': number;
    trophies: number;
}