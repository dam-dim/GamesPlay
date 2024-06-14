import { useState } from "react";
import { useParams } from "react-router-dom";

import * as commentService from "../../../services/comment.service";

export default function AddComment() {
    const { gameId } = useParams();

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await commentService.create(
                gameId,
                formData.username,
                formData.comment
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={addCommentHandler}>
                <input type="text" name="username" placeholder="username" />
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                />
            </form>
        </article>
    );
}
