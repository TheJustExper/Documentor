const ENDPOINT = "https://3000-b36f3252-0af4-4747-9594-b5fe8c29f1ce.ws-eu01.gitpod.io:8080";

export default {
    async getFeed() {
        const response = await fetch(`${ENDPOINT}/api/feed`);
        const data = await response.json();
        return JSON.stringify(data);
    },

    async getLatest() {
        const response = await fetch(`${ENDPOINT}/api/latest`);
        const data = await response.json();
        return JSON.stringify(data);
    }
}