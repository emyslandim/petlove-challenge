import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/routes';
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/cep', routes)

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
        console.log(`Server running: port ${port}`);
    });
}

export default app;