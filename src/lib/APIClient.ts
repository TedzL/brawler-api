import { Player } from "../models/Player";
import { APIClientOptions } from "../types/APIClientOptions";
import { HTTPClient } from "./HTTPClient";

export class APIClient {
    HTTPClient: HTTPClient;

    constructor(options: APIClientOptions) {
        this.HTTPClient = new HTTPClient(options);
    }

    async getPlayer(tag: string) {
        const res = await this.HTTPClient.getPlayer(tag);
        if (res === undefined) return undefined;
        return new Player(res);
    }

}