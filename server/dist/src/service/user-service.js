"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    createUser(username, plainTextPassword, name, age) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = yield this.hashPassword(plainTextPassword);
            const result = yield user_1.User.query().insertAndFetch({
                username,
                password,
                name,
                age
            }).omit(user_1.User, ['password']);
            return result;
        });
    }
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const saltRounds = parseInt(process.env.SALT_ROUNDS || '') || 10;
            const salt = yield bcrypt_1.default.genSalt(saltRounds);
            const hash = yield bcrypt_1.default.hash(password, salt);
            return hash;
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=user-service.js.map