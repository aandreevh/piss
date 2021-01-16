import shit, { LoginTicket, OAuth2Client, } from "google-auth-library";
import { TokenNotValidError } from "./error/token-not-valid";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_SECRET;
const HOST_NAME = process.env.HOST_NAME;
const CLIENT_PORT = process.env.CLIENT_PORT;

class AuthenticationService {
  readonly COOKIE_NAME = 'Auth';
  readonly COOKIE_AGE = 18000000;

  private authClient: OAuth2Client;

  constructor() {
    this.authClient = new OAuth2Client({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      redirectUri: `${HOST_NAME}:${CLIENT_PORT}`,
    });
  }

  public async getTokens(grantCode : string) {
    const {tokens:{refresh_token,access_token,id_token}} = await this.authClient.getToken(grantCode);
    return {refresh_token,access_token,id_token};
  }
  
  public async verifyAccessToken(accessToken : string | null | undefined) {
    if(accessToken == undefined){
      return false;
    }

    try{
       await this.authClient.getTokenInfo(accessToken);   
       return true;
    }catch(e){
      return false;
    }
  }

  public async getTokenInformation(idToken : string){
    const payload = await this.fetchPayload(idToken);

    const name = payload?.name;
    const email = payload?.email;
    const picture = payload?.picture;

    return {name,email,picture};
  }

  public async getNewAccessToken(refreshToken: string) {
    this.authClient.refreshAccessToken()
  }

  private async fetchPayload(idToken : string){
    try{
      const ticket = await this.authClient.verifyIdToken({
        idToken: idToken!,
        audience: process.env.GOOGLE_CLIENT_ID!
      });  

      return ticket.getPayload();
    }catch(e){
      //Check if token is valid and payload exists
        throw new TokenNotValidError(idToken);
    }
  }
}

export default new AuthenticationService();