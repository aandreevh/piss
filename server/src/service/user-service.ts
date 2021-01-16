import { User } from '../model/user';
import { TokenNotValidError } from './error/token-not-valid';

class UserService {

  public async create(username: string, 
    accessToken: string, 
    refreshToken: string, 
    name: string, 
    idToken: string): Promise<User> {
    const user = await User.query().insertAndFetch({
      name,
      username,
      refreshToken,
      accessToken,
      idToken
    });

    return user;
  }

  public async findByAccessToken(accessToken: string) {
    const user = await User.query().where({accessToken});
    if (user.length < 1) {
      throw new TokenNotValidError(accessToken);
    }
  }

}

export default new UserService();
