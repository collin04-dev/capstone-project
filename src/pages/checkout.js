import React from "react"
import Layout from "../components/layout"
import CheckoutForm from "../components/checkoutForm"
import Cart from "../components/cart"
import { Helmet } from "react-helmet"

export default function Checkout() {

    return (
        <>
        <Helmet>
          <title>Shopping Cart</title>
          <meta name="Cart" value="Checkout"/>
        </Helmet>

        <Layout>
            
            <h1 class="carousel-inner color-white">Check Out</h1>
            
            <Cart></Cart>
            <hr/>
            <CheckoutForm></CheckoutForm>
        </Layout>
        </>
    )
}
