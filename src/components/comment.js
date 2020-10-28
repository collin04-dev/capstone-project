import React from "react"
import "./layout.scss";

export default function Comment({comment}) {
    const timestamp = new Date(comment.Created.toDate())
    const tsMonth = timestamp.getMonth() + 1
    const tsDay = timestamp.getDate()
    const tsYear = timestamp.getFullYear()
    return (
        <>
            <div class="card">
                <div class="row commentRow text-center">
                    <div class="card-title col-sm-2 text-center customerComment">
                        <h2> {comment.Rating} / 10 </h2>
                    </div>
                    <div class="col-sm-8 card-text customerComment">
                        <strong>  {comment.Customer} : </strong>
                        <em> {comment.Message}</em> 
                        <br/>
                        <p class="card-subtitle text-muted">
                        <small>{tsMonth}/{tsDay}/{tsYear}</small>
                        </p>
                    </div>
                </div>
                <br/>
            </div>
        </>
    )
}