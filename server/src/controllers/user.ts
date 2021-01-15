import { User } from './../model/user';
import { GET, Path, POST, QueryParam } from 'typescript-rest';
import UserRepository from '../service/user-service';

interface UserInterface {
  name: string;
  age: number;
}

@Path('/user')
export class UserService {

  // test method
  @Path('/')
  @GET
  getUser(): UserInterface {
    return {name: 'Yavor', age: 22};
  } 

  @Path('/')
  @POST
  async createUser(param: {name: string, age: number, username: string, password: string}){
    const { name, age, username, password } = param;
    const result = await UserRepository.createUser(username, password, name, age);
    return result;
  }
}