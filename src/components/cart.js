import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"
import "./layout.scss";

export default function Cart() {
    const { items, taxes, subTotal, shipping, grandTotal } = useContext(CartContext);

    return (
        <>
            <h3>Your Cart</h3>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table text-center">
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
                
            </div>
                
            <div class="row">   
                <div id="total-price" className="col-sm-12 text-center">
                    <tabel id="totalTable">
                        <tr>
                            <td>SubTotal:</td>
                            <td>${subTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Taxes: </td>
                            <td>${taxes.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping: </td>
                            <td>${shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td id="totalPrice">Grand Total: </td>
                            <td id="totalPrice"><strong>${grandTotal.toFixed(2)}</strong></td>
                        </tr>  
                    </tabel>
                </div>
            </div>    

        </>

    )
}