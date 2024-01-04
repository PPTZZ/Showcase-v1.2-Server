import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv'

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DATABASE_URI = process.env.DATABASE_URI;

mongoose.connect(DATABASE_URI)
    .then(()=>console.log('db connected'))
    .catch((err) => console.log(err));


app.get('/', (req,res)=>{
    res.json('ok');
});

app.post('/signin', (req,res)=> {
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password){
            res.json('ok');
        } else{ 
            res.status(400).json('error loging in');
        }
});

app.post('/register', (req, res) => {
    const { email, name, password} = req.body
    database.users.push({
        id:'3',
        name:'Ally',
        email:'Ally@gmail.com',
        password:'cookies',
        joined: new Date()
    })
    res.json(database.users.at(-1))
});

app.get('/profile/:id', (req, res) => {
    const {id} = req.params
    let found = false
    database.users.forEach(user=> {
        if (user.id === id) {
           return res.json(user)
           found = true
        }
    })
    if (!found) {
        res.status(404).json('nope')
    }
})


app.listen (PORT, ()=> console.log (`server running on port ${PORT}`));