import { HTTPClientOptions } from "../types/HTTPClientOptions";
import fetch from 'node-fetch';

const bsOfficialURLs = {
    official: 'https://api.brawlstars.com/v1',
    proxy: 'https://bsproxy.royaleapi.dev/v1',
};

export class HTTPClient {
    apiKey: string;
    urls: { bsOfficialURL: string, };
    headers: { Authorization: string; Accept: string; };

    constructor(options: HTTPClientOptions) {
        this.apiKey = options.apiKey;

        if (options.useProxy) {
            this.urls.bsOfficialURL = bsOfficialURLs.proxy;
        } else {
            this.urls.bsOfficialURL = bsOfficialURLs.official;
        }

        this.headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Accept': 'application/json',
        };
    }

    private async bsOfficialRequest(endpoint: string) {
        const res = await fetch(this.urls.bsOfficialURL+endpoint, {
            headers: this.headers
        });
        if (!res.ok) return undefined;
        return await res.json();
    }

    async getBattleLog(tag: string) {
        tag = tag.toUpperCase().replace('#', '');
        return await this.bsOfficialRequest(`/players/%23${tag}/battlelog`);
    }

    async getClub(tag: string) {
        tag = tag.toUpperCase().replace('#', '');
        return await this.bsOfficialRequest(`/clubs/%23${tag}`);
    }

    async getPlayer(tag: string) {
        tag = tag.toUpperCase().replace('#', '');
        return await this.bsOfficialRequest(`/players/%23${tag}`);
    }

}