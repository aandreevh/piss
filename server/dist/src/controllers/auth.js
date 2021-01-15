"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.AuthService = void 0;
const express_1 = require("express");
const typescript_rest_1 = require("typescript-rest");
const auth_service_1 = __importDefault(require("../service/auth-service"));
let AuthService = class AuthService {
    getUser(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const asdf = yield auth_service_1.default.authClient.getToken(param.code);
            const a = yield auth_service_1.default.authClient.getTokenInfo(asdf.tokens.access_token || '');
            express_1.response.cookie('Auth', asdf.tokens.access_token, {
                maxAge: 86400000,
                httpOnly: true,
                sameSite: 'lax',
            });
            return {
                name: 'Yavor',
                email: a.email,
                pictureUrl: '',
            };
        });
    }
    ;
};
__decorate([
    typescript_rest_1.Path('/google'),
    typescript_rest_1.POST,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "getUser", null);
AuthService = __decorate([
    typescript_rest_1.Path('/auth')
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.js.map