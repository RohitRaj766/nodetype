"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((req, res, next) => {
    next();
});
app.get('/', (req, res) => {
    res.send("hello world, what's up, are you fine?");
    console.log("hi, My name is rohit");
});
const user1 = {
    username: "Rohit",
    password: "123456"
};
app.get('/dashboard', (req, res) => {
    const requestQuery = req.query;
    console.log(user1.username);
    console.log(requestQuery.username);
    console.log("requestQuery");
    const { username, password } = requestQuery;
    if (user1.username === username && user1.password === password) {
        res.send(`Welcome ${username} your password is ${password}`);
    }
    else {
        res.send("Not a valid user");
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
