import express from "express";
import sessionsRouter from "./routes/sessions";
import messageRouter from "./routes/message";

const router = express.Router();

router.use('/sessions', sessionsRouter);
router.use('/message', messageRouter);

export default router;
