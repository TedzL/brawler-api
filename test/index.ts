import {APIClient} from '../dist/index.js';

const client = new APIClient({ 
    apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZmOTE3YzBlLTI4ZDYtNDU0MS1iYzA1LWZjNDcwZDJjZTQ2MyIsImlhdCI6MTY2NDk3OTMxNiwic3ViIjoiZGV2ZWxvcGVyLzRiMjVlMjU0LTFmYzItOGUwNS1hN2U1LTFlMmYzZmRmNzBkMyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.3WRCjrKt56_RCOn9pkYb4-vGNzOpbwtCIPbCYEpsE7IT4G5ODMzEMxJIBBm9tAON_-6GOyRR0gvqM3MEVn05wQ', 
    useProxy: true 
});

(async () => {
    const brawlStarsPlayer = await client.getBattleLog('PR9QRP09Q');
    console.log(brawlStarsPlayer);
})();

