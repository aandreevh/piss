import { OAuth2Client, OAuth2ClientOptions } from "google-auth-library";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_SECRET;
const HOST_NAME = process.env.HOST_NAME;
const PORT = process.env.PORT;

console.log(CLIENT_SECRET);
console.log(CLIENT_ID);

class AuthenticationService {
  authClient: OAuth2Client;

  constructor() {
    this.authClient = new OAuth2Client({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      redirectUri: 'http://localhost:4200',
    });
  }
  
}

export default new AuthenticationService();