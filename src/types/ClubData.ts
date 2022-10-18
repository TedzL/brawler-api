export type ClubData = {
    badgeID: number;
    description: string;
    members: { tag: string, name: string, nameColor: string, role: string, trophies: number, icon: { id: number } }[]
    name: string;
    requiredTrophies: number;
    tag: string;
    trophies: number;
    type: string;
}