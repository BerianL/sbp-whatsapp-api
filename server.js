import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import 'express-async-errors';
import routes from "./router";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = process.env.API_PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Default route that returns a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to SBP WhatsApp API.");
});

// Use the routes defined in the router module
app.use(routes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
