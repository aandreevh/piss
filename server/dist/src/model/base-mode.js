"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const objection_1 = require("objection");
class BaseModel extends objection_1.Model {
    static get columnNameMappers() {
        return objection_1.snakeCaseMappers();
    }
    static get tableName() {
        return 'users';
    }
    $beforeInsert() {
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
    $beforeUpdate() {
        this.updatedAt = new Date().toISOString();
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=base-mode.js.map