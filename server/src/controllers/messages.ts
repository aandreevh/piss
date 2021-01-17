import express from 'express';
import messageService from '../service/message-service'
const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const result = await messageService.getLastMessages(10);
    res.json(result);
  } catch(error) {
    res.status(500).send();
  }
  
});

export default route;