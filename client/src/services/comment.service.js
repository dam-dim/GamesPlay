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

export const getAllByGameId = async (gameIdFilter) => {
    let comments = await request.get(baseUrl);

    comments = Object.values(comments);

    comments = comments.filter(({ gameId }) => gameId === gameIdFilter);

    return comments;
};
