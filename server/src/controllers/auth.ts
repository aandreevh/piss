import Auth  from '../service/auth-service';
import UserService from '../service/user-service'
import express from 'express';
import { User } from '../model/user';

const router = express.Router();

router.post('/google', async (request, response) => {
  const {code} =request.body;
  const {refresh_token,access_token,id_token} = await Auth.getTokens(code);
  const {email,name} = await Auth.getTokenInformation(id_token || '');

  let user : User | undefined;
  if(email && access_token && refresh_token && name && id_token){
     user = await UserService.create(email,access_token,refresh_token,name,id_token);
  }else if(email && access_token && name && id_token){
     user = await UserService.updateWithoutRefreshToken(email,access_token,name,id_token);
  }else{
    response.status(400);
    return;
  }

  if(user){
    response.cookie(Auth.COOKIE_NAME, id_token, {
      httpOnly: true,
      maxAge: Auth.COOKIE_AGE
    });

    response.json(user);
  }else{
    response.status(400);
  }
  
  
});

export default router;
