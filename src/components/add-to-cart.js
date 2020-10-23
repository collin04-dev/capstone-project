import React, { useContext, useState } from "react"
import { CartContext } from "../../shopping.js"

export default function AddToCart({item}) {
    const { addProduct } = useContext(CartContext)
    const { itemCount } = useContext(CartContext)

    return (
        <>
            <button class="btn btn-large btn-success ml-auto display"onClick={ () => addProduct(item)}>Add to Cart</button>
            <p id="itemsInCart" class="display">
            {itemCount === 0 &&
                <strong>Add Item to Cart?</strong>
            }

            {itemCount > 0 &&
                <strong>You have {itemCount} item(s) in your cart.</strong>
            }

            </p>
        </>
    )
}

