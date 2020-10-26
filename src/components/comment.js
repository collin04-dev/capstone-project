import React from "react"
import "./layout.scss";
import avatar from "../media/avatar.png"

export default function Comment({comment}) {
    const timestamp = new Date(comment.Created.toDate())
    const tsMonth = timestamp.getMonth() + 1
    const tsDay = timestamp.getDate()
    const tsYear = timestamp.getFullYear()
    return (
        <>
            <div class="card">
                <div class="row no-gutters">
                    <div class="col-sm-1">
                        <img id="round-img" class="card-img" src={avatar} alt={comment.Name} />
                    </div>
                    <div id="customerComment" class="col-sm-11 card-text">
                        <strong>  {comment.Customer} : </strong>
                        <em> {comment.Message}</em> 
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