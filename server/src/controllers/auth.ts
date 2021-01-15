import Auth  from '../service/auth-service';
import express from 'express';

const router = express.Router();

router.post('/google', async (request, response) => {
  const COOKIE_NAME = 'Auth';
  const COOKIE_AGE = 18000000;

  const client = Auth.authClient;
  const code = request.body;
  const asdf = await Auth.authClient.getToken(code);
  const a = await Auth.authClient.getTokenInfo(asdf.tokens.access_token || '');
  const ticket = await client.verifyIdToken({
    idToken: asdf.tokens.id_token!,
    audience: process.env.GOOGLE_CLIENT_ID!
  });

  response.cookie(COOKIE_NAME, asdf.tokens.id_token, {
    httpOnly: true,
    maxAge: COOKIE_AGE
  });

  response.json( {
    name: ticket.getPayload()?.name,
    email: ticket.getPayload()?.email,
    pictureUrl: ticket.getPayload()?.picture,
  });
});

export default router;
