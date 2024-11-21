import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import router from './router/router'

dotenv.config();

const app = express();

app.set('view engine','ejs');
app.set('views', path.join('./src', 'views'));



app.use(express.static(path.join(__dirname,'../src/public')));
app.use(express.static(path.join(__dirname,'../dist/public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',router);

app.listen(4000, () => console.log('server running at http://localhost:4000'));

