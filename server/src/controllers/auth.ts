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
  console.log(request.cookies); 
  const {refresh_token,access_token,id_token} = await Auth.getTokens(code);
  const {email,name} = await Auth.getTokenInformation(id_token || '');

  let user : User | undefined;
  if(email && access_token && refresh_token && name && id_token){
     user = await UserService.create(email,access_token,refresh_token,name,id_token);
  }else if(email && access_token && name && id_token){
     user = await UserService.updateWithoutRefreshToken(email,access_token,name,id_token);
     console.log('the workflow should be here');
  }else{
    response.status(400).send();
    return;
  }

  if(user){
    response.cookie(Auth.COOKIE_NAME, id_token, {
      httpOnly: true,
      maxAge: Auth.COOKIE_AGE,
    });

    response.json({
      username: user.username,
      name: user.name,
    });
  }else{
    response.status(400).send();
  }
  
  
});

router.get('/me', async (req, res) => {
  const { accessToken } = req.cookies;
  console.log(`cookies ${req.cookies}`);
    console.log(`signed cookies ${req.signedCookies}`);
  try {
    const user = await userService.findByAccessToken(accessToken as string);
    console.log('vasilev e pedal');
    res.json(user);
  } catch (error) {
    if (error instanceof TokenNotValidError) {
      res.status(401).send();
    } else {
      res.status(500).send();
    }
  }
  
});

export default router;
