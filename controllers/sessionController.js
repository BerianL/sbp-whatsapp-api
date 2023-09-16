import { handleSessionRequest, handleImageRequest } from "../utils";
import { BASE_URL } from "../config";


// Functions for handling requests to the /sessions endpoint
export const getSessions = async (req, res) => {
    await handleSessionRequest(req, res, 'sessions?all=true');
};

export const startSession = async (req, res) => {
    const { name } = req.params;
    await handleSessionRequest(req, res, 'sessions/start', 'post', { name });
};

export const stopSession = async (req, res) => {
    const { name } = req.params;
    await handleSessionRequest(req, res, 'sessions/stop', 'post', { name, logout: false });
};

export const removeSession = async (req, res) => {
    const { name } = req.params;
    await handleSessionRequest(req, res, 'sessions/logout', 'post', { name });
};

export const getQrCode = async (req, res) => {
    const imageUrl = `${BASE_URL}/${req.params.name}/auth/qr`;
    await handleImageRequest(req, res, imageUrl);
};