import express, { Application, Response as ExResponse, Request as ExRequest } from "express";
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes.js";
import userRoutes from "./user/route";
import ephiRoutes from "./ephi/route";

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

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});