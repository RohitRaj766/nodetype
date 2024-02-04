import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send("hello world, what's up, are you fine?");
    console.log("hi, My name is rohit");
});

interface User {
    username: string;
    password: string;
}

const user1: User = {
    username: "Rohit",
    password: "123456"
}

app.get('/dashboard', (req: Request, res: Response) => {
    const requestQuery = req.query;
    console.log(user1.username);
    console.log(requestQuery.username);
    console.log("requestQuery");
    const { username, password } = requestQuery;

    if (user1.username === username && user1.password === password) {
        res.send(`Welcome ${username} your password is ${password}`);
    } else {
        res.send("Not a valid user");
    }
});

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
