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
    .withGraphFetched('user')
    .modifyGraph('user', builder => {
      builder.select('username', 'name', 'id');
    })
    .orderBy('id', 'desc');

  }

  async create(message: string, userId: number) {
    const m = await Message.query().insertAndFetch({
      message,
      userId,
    });

    const res = await Message
    .query()
    .findById(m.id)
    .withGraphFetched('user')
    .modifyGraph('user', builder => {
      builder.select('username', 'name', 'id');
    });

    return res;
  }
}

export default new MessageService();