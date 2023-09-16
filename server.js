import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import 'express-async-errors';

import routes from "./router";
import { errorHandler } from "./middleware/errorHandler";
import { PORT } from "./config";

const app = express();

// Use the PORT from config.js, or a default value (e.g., 8080) as a fallback
const port = PORT || 8080;

// Middleware
app.use(bodyParser.json({ limit: '10mb' })); // Body parser with limit
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // URL-encoded parser with limit
app.use(cors());

// Default route that returns a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to SBP WhatsApp API.");
});

// Use the routes defined in the router module
app.use(routes);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
