import express from "express";
import sessionsRouter from "./routes/sessions";
import messageRouter from "./routes/messages";

const router = express.Router();

router.use('/sessions', sessionsRouter);
router.use('/messages', messageRouter);

export default router;
