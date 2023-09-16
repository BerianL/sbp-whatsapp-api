import { sendMessage } from "../utils";

export const sendText = async (req, res) => {
    const { phoneNumber, message, from } = req.body;
    const endpoint = 'sendText';
    const messageData = {
        session: from,
        chatId: `${phoneNumber}@c.us`,
        text: message
    };
    await sendMessage(req, res, endpoint, messageData);
};

export const sendImageUrl = async (req, res) => {
    const { from, phoneNumber, mimetype, url, filename, caption } = req.body;
    const endpoint = 'sendImage';
    const messageData = {
        session: from,
        chatId: `${phoneNumber}@c.us`,
        file: {
            mimetype,
            url,
            filename
        },
        caption
    };
    await sendMessage(req, res, endpoint, messageData);
};

export const sendImageBase64 = async (req, res) => {
    const { from, phoneNumber, mimetype, data, filename, caption } = req.body;
    const endpoint = 'sendImage';
    const messageData = {
        session: from,
        chatId: `${phoneNumber}@c.us`,
        file: {
            mimetype,
            filename,
            data,
        },
        caption
    };
    await sendMessage(req, res, endpoint, messageData);
};

export const sendFileUrl = async (req, res) => {
    const { from, phoneNumber, mimetype, url, filename } = req.body;
    const endpoint = 'sendFile';
    const messageData = {
        session: from,
        chatId: `${phoneNumber}@c.us`,
        file: {
            mimetype,
            url,
            filename
        }
    };
    await sendMessage(req, res, endpoint, messageData);
};

export const sendFileBase64 = async (req, res) => {
    const { from, phoneNumber, mimetype, data, filename } = req.body;
    const endpoint = 'sendFile';
    const messageData = {
        session: from,
        chatId: `${phoneNumber}@c.us`,
        file: {
            mimetype,
            filename,
            data,
        }
    };
    await sendMessage(req, res, endpoint, messageData);
};


