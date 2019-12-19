const ENDPOINT = "http://localhost:8080";

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