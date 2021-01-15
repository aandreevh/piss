import { User } from '../model/user';
import bcrypt from 'bcrypt';

class UserService {
  
  async createUser(username: string, plainTextPassword: string, name: string, age: number) {
    const password = await this.hashPassword(plainTextPassword);

    const result = await User.query().insertAndFetch({
      username,
      password,
      name,
      age
    }).omit(User, ['password']);


    return result;
  }

  private async hashPassword(password: string) {
    const saltRounds = parseInt(process.env.SALT_ROUNDS || '') || 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }
}

export default new UserService();
