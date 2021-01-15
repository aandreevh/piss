import { OAuth2Client } from "google-auth-library";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_SECRET;
const HOST_NAME = process.env.HOST_NAME;
const CLIENT_PORT = process.env.CLIENT_PORT;

class AuthenticationService {
  authClient: OAuth2Client;

  constructor() {
    this.authClient = new OAuth2Client({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      redirectUri: `${HOST_NAME}:${CLIENT_PORT}`,
    });
  }
  
}

export default new AuthenticationService();