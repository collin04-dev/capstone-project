import React from "react"
import Comment from "./comment.js"
import CommentForm from "./commentForm.js"

export default function Comments({ comments, page }) {
    return (
     <>
        <br/>
        {/* comment form / List*/}
        {comments.length === 0 && 

            <div class="text-center"><strong>Be the first to leave a comment!</strong><br/></div>
        }
        {comments.length > 0 && 
            comments.map((c, index) => (
                <Comment comment={c} key={index} />
            ))
        }

        <br/>
        <CommentForm page={page} />

     </>
    )
}