import React, { useReducer, createContext } from "react"

export const CartContext = createContext()

const cart = {
    addItem: function(item) {
        if (typeof window === `undefined`) {
            return
        }
        let cart = window.localStorage.getItem("react-cart");
        if (!cart) {
            cart = {};
        }
        else {
            cart = JSON.parse(cart);
        }

        if (item.sku in cart) {
            cart[item.sku].qty += 1
        }
        else {
            item.qty = 1;
            cart[item.sku] = item;
        }

        window.localStorage.setItem("react-cart", JSON.stringify(cart));
    },

    getItems: function() {
        if (typeof window === `undefined`) {
            return []
        }
        let cart = window.localStorage.getItem("react-cart");
        if (!cart) {
            cart = {};
        }
        else {
            cart = JSON.parse(cart);
        }

        let items = []
        Object.keys(cart).forEach(sku => {
            items.push(cart[sku])
        })

        return items;
    },

    getItemCount: function() {
        let count = 0
        this.getItems().map(item => count += item.qty)
        return count
    },

    getSubtotal: function() {
        let subtotal = 0
        this.getItems().map(item => subtotal += item.price * item.qty)
        return subtotal
    },

    getTaxes: function() {
        return this.getSubtotal() * .1;
    },

    getShipping: function() {
        return 5;
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state.addItem(action.item)
            return {
                ...state
            }

        default:
            return state
    }
}

export const totals = (cart) => {
    let items = cart.getItems()
    let itemCount = cart.getItemCount()
    let taxes = cart.getTaxes()
    let subTotal = cart.getSubtotal()
    let shipping = cart.getShipping()
    let grandTotal = taxes + subTotal + shipping
    return { items, itemCount, taxes, subTotal, shipping, grandTotal }
}

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, cart);

    const addProduct = (item) => {
        dispatch({
            type: "ADD_ITEM",
            item
        })
    }

    const contextValues = {
        addProduct,
        ...totals(cart),
        ...state
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

