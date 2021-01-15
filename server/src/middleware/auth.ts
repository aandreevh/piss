import { Request,Response,NextFunction } from "express";
import Auth from '../service/auth-service';

export default (req : Request, res : Response, next : NextFunction)=>{
    const accessToken = req.cookies[Auth.COOKIE_NAME];
    
}