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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./routes/user"));
class connection {
    constructor() {
        this.app = (0, express_1.default)();
        dotenv_1.default.config();
    }
    useMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    test() {
        this.app.get("/", (req, res) => {
            res.status(200).json("Testing server!");
        });
    }
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log("Connected to db & server started on port", process.env.PORT);
        });
    }
    connectToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoose_1.default.connect(process.env.DB_URI);
            this.listen();
        });
    }
    initializeRoutes() {
        // this.app.use("/api/user", u);
        this.app.use("/api/data", user_1.default);
    }
}
const server = new connection();
server.useMiddlewares();
server.test();
server.connectToDB();
server.initializeRoutes();
