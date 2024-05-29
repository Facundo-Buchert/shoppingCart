import { useReducer } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {

    const cartReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case "[CART] AddProduct":
                return [...state, action.payload]
            case "[CART] RemoveProduct":
                return state.filter(product => product.id !== action.payload)
            case "[CART] IncrementQuantity":
                return state.map(product => product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product)
            case "[CART] DecrementQuantity":
                return state.map(product => product.id === action.payload && product.quantity > 1 ?
                    { ...product, quantity: product.quantity - 1 } : product)

            default:
                return state

        }
    }

    const initialState = []

    const [cartList, dispatch] = useReducer(cartReducer, initialState)

    const addProduct = (product) => {
        product.quantity = 1
        const action = {
            type: "[CART] AddProduct",
            payload: product
        }
        dispatch(action)
    }
    const removeProduct = (id) => {
        const action = {
            type: "[CART] RemoveProduct",
            payload: id
        }
        dispatch(action)
    }
    const incrementQuantity = (id) => {
        const action = {
            type: "[CART] IncrementQuantity",
            payload: id
        }
        dispatch(action)
    }
    const decrementQuantity = (id) => {
        const action = {
            type: "[CART] DecrementQuantity",
            payload: id
        }
        dispatch(action)
    }


    return (
        <CartContext.Provider value={{ cartList, addProduct, removeProduct, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>

    )

}
