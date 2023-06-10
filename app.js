"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./app/routes/router"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("app/public"));
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", router_1.default);
app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});
