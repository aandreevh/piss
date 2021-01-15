"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const typescript_rest_1 = require("typescript-rest");
const knexfile_1 = __importDefault(require("../knexfile"));
const auth_1 = require("./controllers/auth");
const user_1 = require("./controllers/user");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require('dotenv').config();
const knex = knex_1.default(knexfile_1.default.development);
objection_1.Model.knex(knex);
const app = express_1.default();
app.use(cors_1.default({
    origin: true,
    credentials: true,
}));
const secret = process.env.COOKIE_SECRET;
console.log(secret);
app.use(cookie_parser_1.default(secret || 'strong secret', {}));
typescript_rest_1.Server.buildServices(app, user_1.UserService, auth_1.AuthService);
const port = process.env.PORT || 12345;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map