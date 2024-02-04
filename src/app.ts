import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send("hello world, what's up, are you fine?");
    console.log("hi, My name is rohit");
});

interface user{
    username:string;
    password:string;
}

const user1: user ={
    username:"Rohit",
    password:"123456"
}

app.get('/dashboard',(req: Request, res: Response)=>{
    const reques = req.query;
    console.log(user1.username)
    console.log(reques.username)
    console.log("reques");
    const {username, password} = reques
    if(user1.username == username && user1.password == password){

        res.send(`Welcome ${username} your password is ${password}`)
    }else{
        res.send("Not a valid user")
    }
});

// app.get('/dashboard', (req: Request, res: Response) => {
    // res.redirect('/dashboard-page'); // Replace '/dashboard-page' with your actual dashboard route
// });


const PORT:number = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
