import axios from "axios";
import { BASE_URL } from "./config";

//Function to get the headers for the API requests
export const getHeaders = () => ({
    accept: "application/json",
    'X-Api-Key': process.env.WHATSAPP_API_KEY
});

//Function to handle requests to the API that return JSON
export const handleRequest = async (req, res, endpoint, method = 'get', data = {}) => {
    try {
        const response = await axios({
            method,
            url: `${BASE_URL}/${endpoint}`,
            headers: getHeaders(),
            data
        });

        if (response.status === 200) {
            res.json(response.data);
        } else {
            res.status(response.status).json({ error: `API Error: ${response.statusText}`, data: response.data });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};

//Function to handle requests to the API that return images
export const handleImageRequest = async (req, res, imageUrl) => {
    try {
        const response = await axios.get(imageUrl, {
            headers: getHeaders(),
            responseType: 'arraybuffer'
        });

        if (response.status === 200) {
            const imageBuffer = response.data;
            res.setHeader('Content-Type', 'image/png');
            res.send(imageBuffer);
        } else {
            res.status(response.status).json({ error: "Error fetching image", data: response.data });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
};
//Function to handle Session requests
export const handleSessionRequest = async (req, res, endpoint, method = 'get', data = {}) => {
    await handleRequest(req, res, endpoint, method, data);
};

//Function to send WhatsApp messages
export const sendMessage = async (req, res, endpoint) => {
    const { from, phoneNumber, ...messageData } = req.body;
    await handleRequest(req, res, endpoint, 'post', {
        session: from,
        chatId: `${phoneNumber}@c.us`,
        ...messageData
    });
};