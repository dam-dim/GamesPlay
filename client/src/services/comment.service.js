import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = async (gameId, username, text) => {
    try {
        const newComment = await request.post(baseUrl, {
            gameId,
            username,
            text,
        });

        return newComment;
    } catch (error) {
        console.log(error);
    }
};
