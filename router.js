import express from "express";
import sessionsRouter from "./routes/sessions";

const router = express.Router();

router.use('/sessions', sessionsRouter);

export default router;
