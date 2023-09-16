import express from "express";
import { getSessions, startSession, stopSession, removeSession, getQrCode } from "../controllers/sessionController";
import { isValidSessionName } from "../validation";

const sessionsRouter = express.Router();

// Middleware to validate session name parameter
sessionsRouter.param('name', (req, res, next, name) => {
    if (isValidSessionName(name)) {
        req.sessionName = name;
        next();
    } else {
        res.status(400).json({ error: "Invalid session name" });
    }
});

sessionsRouter.get('/', getSessions);
sessionsRouter.post('/:name/start', startSession);
sessionsRouter.post('/:name/stop', stopSession);
sessionsRouter.post('/:name/remove', removeSession);
sessionsRouter.get('/:name/qrCode', getQrCode);

export default sessionsRouter;