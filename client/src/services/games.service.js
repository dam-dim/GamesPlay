import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/games";

export const create = async (gameData) => {
    const response = await request.post(baseUrl, gameData);

    const result = await response.json();

    return result;
};

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};
