import cors from 'cors';
import e from 'express';
import { loginEmployeeRouter } from './routes/loginEmployeeRouter.js';
import { validateRouter } from './routes/validationRouter.js';
import { signEmployeeRouter } from './routes/signEmployeeRouter.js';

let localSv = process.env.PORT || 3000;

let app = e();

app.use(cors({
    credentials: true,
    origin: true
}));
app.use(e.json());
app.use('/employee', loginEmployeeRouter);
app.use('/validate', validateRouter);
app.use('/sign', signEmployeeRouter);

app.listen(localSv, () => {
    console.log(`Listening to port: http://localhost:${localSv}`)
})