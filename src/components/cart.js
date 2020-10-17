import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"
import "./layout.scss";

export default function Cart() {
    const { items, taxes, subTotal, shipping, grandTotal } = useContext(CartContext);

    return (
        <>
            <h3>Your Cart</h3>
            <div className="row">
                <div className="col-sm-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map(item => {
                            return (
                                <tr>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        {item.qty}
                                    </td>
                                    <td>
                                        ${(item.qty * item.price).toFixed(2)}
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div id="total-price" className="col-sm-4">

                    SubTotal: ${subTotal.toFixed(2)}
                    <br />
                    Taxes: ${taxes.toFixed(2)}
                    <br />
                    Shipping: ${shipping.toFixed(2)}
                    <br />
                    Grand Total: <strong>${grandTotal.toFixed(2)}</strong>
                </div>
            </div>
        </>

    )
}