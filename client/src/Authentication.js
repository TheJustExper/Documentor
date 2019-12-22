export default {
    setToken(token) {
        localStorage.setItem("token", token);
    },

    getToken() {
        localStorage.getItem("token");
    }
}