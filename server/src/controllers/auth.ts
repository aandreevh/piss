import Auth  from '../service/auth-service';
import UserService from '../service/user-service'
import express, { json } from 'express';
import { User } from '../model/user';
import userService from '../service/user-service';
import { TokenNotValidError } from '../service/error/token-not-valid';

const router = express.Router();

router.post('/google', async (request, response) => {
  const {code} =request.body;
  const rndtoken = request.cookies[Auth.COOKIE_NAME];
  const {refresh_token,access_token,id_token} = await Auth.getTokens(code);
  const {email,name} = await Auth.getTokenInformation(id_token || '');

  let user : User | undefined;
  if(email && access_token && refresh_token && name && id_token){
     user = await UserService.create(email,access_token,refresh_token,name,id_token);
  }else if(email && access_token && name && id_token){
     user = await UserService.updateWithoutRefreshToken(email,access_token,name,id_token);
  }else{
    response.status(400).send();
    return;
  }

  if(user){
    response.cookie(Auth.COOKIE_NAME, access_token, {
      httpOnly: true,
      maxAge: Auth.COOKIE_AGE,
      expires: new Date(Date.now() + 900000)
    });

    response.json(user);
  }else{
    response.status(400).send();
  }
  
  
});

router.get('/me', async (req, res) => {
  const { Auth } = req.cookies;

  try {
    const user = await userService.findByAccessToken(Auth as string);
    res.json(user).send();
  } catch (error) {    
    if (error instanceof TokenNotValidError) {
      res.status(401).send();
    } else {
      
      res.status(500).send();
    }
  }
  
});

export default router;
