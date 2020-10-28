import React, { useState } from "react"
import axios from "axios"
import Layout from "./layout"

export default function CheckoutForm() {

    const [ email, setEmail ] = useState("");
    const [ fullname, setFullname ] = useState("");

    function saveOrder() {

         let customer = {
             fullname: fullname,
             email: email,
         }
         axios.post("https://webhook.site/7534fbf4-2aae-4943-a3b9-9517cc87e359", customer);

         alert("Thank you! Your Order Was Placed")
    }

    return (
        <>
            <h2 class="carousel-inner color-white">Your Details</h2>

            <div class="container">
            <div class="form-group">
                <label class="color-white" for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) } }/>
            </div>
            <div class="form-group">
                <label class="color-white" for="exampleFormControlInput1">Your Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" value={fullname} onChange={(e) => { setFullname(e.target.value) } } />
            </div>
            </div>
            <div id="orderButton" class="text-center">
            <button className="btn btn-large btn-success" onClick={() => saveOrder()}>Place Order</button>
            </div>
        </>
    )
}
