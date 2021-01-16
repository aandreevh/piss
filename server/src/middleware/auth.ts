import { signedCookies } from "cookie-parser";
import { Request,Response,NextFunction } from "express";
import Auth from '../service/auth-service';
import UserService from '../service/user-service';

export default async (req : Request, res : Response, next : NextFunction)=>{
    console.log(`signed cookies ${req.signedCookies[Auth.COOKIE_NAME]}`);
    const accessToken = req.cookies[Auth.COOKIE_NAME];
    try {
        await UserService.findByAccessToken(accessToken);
    } catch(error) {
        res.status(401);
    }
    next();
    


    
}