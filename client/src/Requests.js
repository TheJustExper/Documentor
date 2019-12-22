import Auth from "./Authentication";

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
        if (data.error) return;
        return data;
    },

    async registerAccount(username, password) {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password})
        }
        const response = await fetch(`${ENDPOINT}/api/register`, config);
        const data = await response.json();
        if (data.response === "SUCCESS") {
            Auth.setToken(data.token);
        } else {
            alert("There was a problem registering");
        }
    },
}