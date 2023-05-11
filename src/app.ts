import "reflect-metadata";
import "express-async-errors";
import { handleErrors } from './errors';
import express from "express";
import {
    usersRoutes,
    categoriesRoutes,
    loginRoutes,
    realEstateRoutes,
    schedulesRoutes,
} from "./routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleErrors)

export default app;
