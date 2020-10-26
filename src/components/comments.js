import React from "react"
import Comment from "./comment.js"
import CommentForm from "./commentForm.js"

export default function Comments({ comments, page }) {
    return (
     <>
        <br/>
        {/* comment form */}
        
        {/* comment list */}
        {comments.length === 0 && 
            <strong>Be the first to leave a comment!</strong>
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