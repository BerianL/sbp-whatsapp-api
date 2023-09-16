import { sendMessage } from "../utils";
export const sendText = async (req, res) => {
    await sendMessage(req, res, 'text');
};

export const sendImageUrl = async (req, res) => {
    await sendMessage(req, res, 'imageUrl');
};

export const sendImageBase64 = async (req, res) => {
    await sendMessage(req, res, 'imageBase64');
};

export const sendFileUrl = async (req, res) => {
    await sendMessage(req, res, 'fileUrl');
};

export const sendFileBase64 = async (req, res) => {
    await sendMessage(req, res, 'fileBase64');
};