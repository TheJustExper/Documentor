const ENDPOINT = "http://localhost:8080";

export default {
    async getRequest(type) {
        const response = await fetch(`${ENDPOINT}/api/${type}`);
        const data = await response.json();
        return data;
    },
}