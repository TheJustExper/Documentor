export default class {
    static setToken(token) {
        localStorage.setItem("token", token);
    }

    static getToken() {
        localStorage.getItem("token");
    }
    
    static verifyToken() {
        // Ill add something here
    }
}