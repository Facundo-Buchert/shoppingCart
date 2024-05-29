import { useContext, useEffect, useState } from "react"
import "../styles/CardComponent.css"
import { CartContext } from "../context/CartContext"

export const CardComponent = ({ id, image, title, description, price, handlerAdd, handlerRemove }) => {

    const { cartList } = useContext(CartContext)
    const [added, setAdded] = useState(false)

    const removeFromCart = () => {
        setAdded(false)
        handlerRemove()
    }

    const addToCart = () => {
        setAdded(true)
        handlerAdd()

    }

    const checkAdded = () => {
        const product = cartList.find(product => product.id === id)
        if (product) {
            setAdded(true)
        } else {
            setAdded(false)
        }
    }

    useEffect(() => {
        checkAdded()
    }, [])


    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">€ {price}</p>
                <div className="button-container">
                    {
                        added
                            ? <button
                                type="button"
                                className="btn btn-danger removeButton"
                                onClick={removeFromCart}
                            >Quitar</button>
                            : <button
                                type="button"
                                className="btn btn-success addButton"
                                onClick={addToCart}
                            >Agregar</button>
                    }
                </div>

            </div>

        </div>
    )
}
