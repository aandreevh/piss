import Auth  from '../service/auth-service';
import express from 'express';

const router = express.Router();

router.post('/google', async (request, response) => {
  const {code} =request.body;
  const {refresh_token,access_token,id_token} = await Auth.getTokens(code);
  const information = Auth.getTokenInformation(id_token || '');

  response.cookie(Auth.COOKIE_NAME, id_token, {
    httpOnly: true,
    maxAge: Auth.COOKIE_AGE
  });
  
  response.json(information);
});

export default router;
