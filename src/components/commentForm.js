import React, { useState } from "react"
import { firestore } from "../../firebase.js"

export default function CommentForm({page}) {

    const [customer, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleCommentSubmission = async e => {
        e.preventDefault()

        let comment = {
            Customer: customer,
            Message: message,
            Page: page,
            Created: new Date()
        }

        setName("")
        setMessage("")

        firestore.collection(`comments`).add(comment).catch(err => {
            console.error('Error adding comment: ', err)
        })
    }

    return (
        <>
            <br/>
            <h4 class="text-center">Played This Game? Leave A Review!</h4>

            <form onSubmit={ e => handleCommentSubmission(e) }>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" htmlFor="name">Your Name</label>
                    </div>
                    <input type="text" name="name" class="form-control" value={customer} required onChange={e => setName(e.target.value)} />
                </div>
                <br/>
                <div class="form-group">  
                    <label htmlFor="message">Your Review</label>
                    <textarea name="message" class="form-control" value={message} required onChange={e => setMessage(e.target.value)}></textarea>
                    <br/>
                    <div class="text-center">
                    <button className="btn btn-light">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}