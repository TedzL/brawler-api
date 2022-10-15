import { HTTPClientOptions } from "../types/HTTPClientOptions";
import fetch from 'node-fetch';

const officialURL = 'https://api.brawlstars.com/v1';
const proxyURL = 'https://bsproxy.royaleapi.dev/v1';

export class HTTPClient {
    apiKey: string;
    baseURL: string;
    headers: { Authorization: string; Accept: string; };

    constructor(options: HTTPClientOptions) {
        this.apiKey = options.apiKey;

        if (options.useProxy) {
            this.baseURL = proxyURL;
        } else {
            this.baseURL= officialURL;
        }

        this.headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Accept': 'application/json',
        };
    }

    private async request(endpoint: string) {
        const res = await fetch(this.baseURL+endpoint, {
            headers: this.headers
        });
        if (!res.ok) return undefined;
        return await res.json();
    }

    async getBattleLog(tag: string) {
        tag = tag.toUpperCase().replace('#', '');
        return await this.request(`/players/%23${tag}/battlelog`);
    }

    async getClub(tag: string) {
        tag = tag.toUpperCase().replace('#', '');
        return await this.request(`/clubs/%23${tag}`);
    }

    async getPlayer(tag: string) {
        tag = tag.toUpperCase().replace('#', '');
        return await this.request(`/players/%23${tag}`);
    }

}