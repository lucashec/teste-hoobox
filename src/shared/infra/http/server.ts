import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import '../database/connect';
import routes from './routes';
import '../../containers/';
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
