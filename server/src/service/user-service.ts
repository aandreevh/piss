import { User } from '../model/user';
import { TokenNotValidError } from './error/token-not-valid';

class UserService {

  public async create(username: string, 
    accessToken: string, 
    refreshToken: string, 
    name: string, 
    idToken: string): Promise<User> {
    return await User.query().insertAndFetch({
      name,
      username,
      refreshToken,
      accessToken,
      idToken
    }).omit(User,['access_token','id_token','refresh_token']);
  }

  public async updateWithoutRefreshToken(username: string, 
    accessToken: string, 
    name: string, 
    idToken: string){
    const user = await User.query().findOne('username',username);


    return await user.$query().updateAndFetch({
        accessToken,
        idToken,
        name
      }).omit(User,['access_token','id_token','refresh_token']);
    }

  public async findByAccessToken(accessToken: string) {
    const user = await User.query().where({accessToken});
    if (user.length < 1) {
      throw new TokenNotValidError(accessToken);
    }
  }

}

export default new UserService();
