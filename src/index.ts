import express from "express";
import bodyParser from 'body-parser'
import routes from './routes.js'

const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});