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
    }).select('username', 'name', 'created_at', 'updated_at', 'id');
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
      }).select('username', 'name', 'created_at', 'updated_at', 'id');
    }

  public async findByAccessToken(accessToken: string) {
    const user = await User.query().where('access_token', accessToken).select('username', 'name', 'created_at', 'updated_at', 'id');
    
    if (user.length < 1) {
      throw new TokenNotValidError(accessToken);
    }

    return user[0];
  }

}

export default new UserService();
