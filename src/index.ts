import express, {Application, NextFunction, Request as ExRequest, Response as ExResponse} from "express";
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import {RegisterRoutes} from "../build/routes.js";
import userRoutes from "./user/route";
import ephiRoutes from "./ephi/route";
import CustomError from "./custome-error.class";

const port = 8000;
const app: Application = express();

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
        swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/users', userRoutes);
app.use('/ephi', ephiRoutes);

RegisterRoutes(app);


app.use((err: CustomError, _req: ExRequest, res: ExResponse, _next: NextFunction) => {
    console.error(err.stack);

    res.status(404).json({
        message: err.message,
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});