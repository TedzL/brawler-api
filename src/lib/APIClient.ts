import { BattleLog } from "../models/BattleLog";
import { Club } from "../models/Club";
import { Player } from "../models/Player";
import { APIClientOptions } from "../types/APIClientOptions";
import { HTTPClient } from "./HTTPClient";

export class APIClient {
    private HTTPClient: HTTPClient;

    constructor(options: APIClientOptions) {
        this.HTTPClient = new HTTPClient(options);
    }

    async getBattleLog(tag: string) {
        const res = await this.HTTPClient.getBattleLog(tag);
        if (res === undefined) return undefined;
        return new BattleLog(res.items);
    }

    async getClub(tag: string) {
        const res = await this.HTTPClient.getClub(tag);
        if (res === undefined) return undefined;
        return new Club(res);
    }

    async getPlayer(tag: string) {
        const res = await this.HTTPClient.getPlayer(tag);
        if (res === undefined) return undefined;
        return new Player(res);
    }

}