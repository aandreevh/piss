"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_auth_library_1 = require("google-auth-library");
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_SECRET;
const HOST_NAME = process.env.HOST_NAME;
const PORT = process.env.PORT;
console.log(CLIENT_SECRET);
console.log(CLIENT_ID);
class AuthenticationService {
    constructor() {
        this.authClient = new google_auth_library_1.OAuth2Client({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            redirectUri: 'http://localhost:4200',
        });
    }
}
exports.default = new AuthenticationService();
//# sourceMappingURL=auth-service.js.map