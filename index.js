import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/router.js";
import swaggerUI from 'swagger-ui-express';
import {str} from './swagger_output.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(JSON.parse(str)));

mongoose
  .connect("mongodb+srv://kushagra:root-k@result-app.olfwqri.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log("error while connecting", err));

app.listen(5500, () => console.log("server is running on port 5500"));
