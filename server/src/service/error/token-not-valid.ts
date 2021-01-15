import { BaseError } from "../../utils/base-error";

export class TokenNotValidError extends BaseError{
    public tokenId? : string

    public constructor(tokenId? : string){
        super(`Token '${tokenId || ''}' not valid.`);
        this.tokenId = tokenId
    }
}