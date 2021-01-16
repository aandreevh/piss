import { Message } from "../model/message";

class MessageService {
  private static defaultCount = 100;
  getLastMessages(count?: number) {
    let limit: number;
    limit = 100;

    if(count != undefined && count > 0) {
      limit  = count; 
    }

    Message
    .query()
    .limit(limit)
    .withGraphFetched('users');
  }
}