export default class BaseError extends Error {
    constructor(message: string) {
      super(message);
  
      // See https://stackoverflow.com/a/51229776 for why this is necessary
      Object.setPrototypeOf(this, BaseError.prototype);
    }
}