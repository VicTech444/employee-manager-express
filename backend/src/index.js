import cors from 'cors';
import e from 'express';
import { employeeRouter } from './routes/employeeRouter.js';
import { validateRouter } from './routes/validationRouter.js';

let localSv = process.env.PORT || 3000;

let app = e();

app.use(cors({
    credentials: true,
    origin: true
}));
app.use(e.json());
app.use('/employee', employeeRouter);
app.use('/validate', validateRouter)


app.listen(localSv, () => {
    console.log(`Listening to port: http://localhost:${localSv}`)
})