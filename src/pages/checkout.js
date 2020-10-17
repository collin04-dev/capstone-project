import React from "react"
import Layout from "../components/layout"
import CheckoutForm from "../components/checkoutForm"
import Cart from "../components/cart"
import { Link } from 'react-router-dom';

export default function Checkout() {

    return (
        <Layout>
            
            <h1 class="carousel-inner color-white">Check Out</h1>
            
            <Cart></Cart>
            <hr/>
            <CheckoutForm></CheckoutForm>
        </Layout>
    )
}
