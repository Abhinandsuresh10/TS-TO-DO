"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controller/controller"));
const router = (0, express_1.Router)();
router.get('/', controller_1.default.loadPage);
router.post('/add-task', controller_1.default.addTask);
router.delete('/delete-task', controller_1.default.deleteTask);
router.patch('/complete-task', controller_1.default.completeTask);
router.put('/edit-task', controller_1.default.editTask);
exports.default = router;
