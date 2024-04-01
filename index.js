import express, { json } from 'express';
import userController from './controllers/userController';

const app = express();
app.use(json());

app.post('/user', userController.createUser);
app.get('/user/:id', userController.findUserById);

app.listen(3000, () => console.log('Server running on port 3000'))