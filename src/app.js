import express from 'express'
import morgan from 'morgan'
import { config } from 'dotenv';
import productsRouter from './routes/productsrouter.js';
const app=express();
config();

//setings
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));//en tiempo de dasarrolo , cuando se hostea se pone en mode produccion
app.use('/',productsRouter);
export default app;