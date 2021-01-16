import { Message } from "../model/message";
import { User } from "../model/user";

class MessageService {
  private static defaultCount = 100;
  async getLastMessages(count?: number) {
    let limit: number;
    limit = 100;

    if(count != undefined && count > 0) {
      limit  = count; 
    }

    return await Message
    .query()
    .limit(limit)
    .withGraphFetched('users')
    .modifyGraph('users', builder => {
      builder.select('username', 'name');
    });
  }

  async create(message: string, user: User) {
    
  }
}