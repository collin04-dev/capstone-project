import React, { useState } from "react"
import { firestore } from "../../firebase.js"

export default function CommentForm({page}) {

    const [customer, setName] = useState("")
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState("")

    const handleCommentSubmission = async e => {
        e.preventDefault()

        {/*Create Customer Object*/}
        let comment = {
            Customer: customer,
            Message: message,
            Rating: rating,
            Page: page,
            Created: new Date()
        }

        setName("")
        setMessage("")
        setRating("")

        firestore.collection(`comments`).add(comment).catch(err => {
            console.error('Error adding comment: ', err)
        })
    }

    return (
        <>
            {/*Comment Form Found on GameTemplate*/}
            <br/>
            <h4 class="text-center">Played This Game? Leave A Review!</h4>
            <br/>
            <form onSubmit={ e => handleCommentSubmission(e) }>
                <div class="form-row">
                    <div class="col-sm-10">
                        <div class="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" class="form-control" value={customer} required onChange={e => setName(e.target.value)} />
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="form-group">
                            <label htmlFor="rating">Rating 0 - 10</label>
                            <input type="number" name="rating"class="form-control" value={rating} required onChange={e => setRating(e.target.value)} />
                        </div>  
                    </div>
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