import express from "express";
import { sendText, sendImageUrl, sendImageBase64, sendFileUrl, sendFileBase64 } from "../controllers/messageController";

const messageRouter = express.Router();

messageRouter.post("/text", sendText);
messageRouter.post("/image/url", sendImageUrl);
messageRouter.post("/image/base64", sendImageBase64);
messageRouter.post("/file/url", sendFileUrl);
messageRouter.post("/file/base64", sendFileBase64);

export default messageRouter;