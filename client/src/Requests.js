const ENDPOINT = "http://localhost:8080";
const API_LIST = ["feed", "latest"]

export default {
    async getRequest(type) {
        if (!API_LIST.includes(type)) throw new Error("[API] Server does not have the endpoint: " + type);
        const response = await fetch(`${ENDPOINT}/api/${type}`);
        const data = await response.json();
        return data;
    },
    async getPost(id) {
        const response = await fetch(`${ENDPOINT}/api/post?id=${id}`);
        const data = await response.json();
        return data;
    }
}