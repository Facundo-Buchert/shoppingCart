import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import "../styles/NavBarComponent.css"

export const NavBarComponent = () => {

    const { cartList } = useContext(CartContext) 
    
    return (
        <>
            <nav style={{position:"sticky", top:"0px", zIndex:"10"}} className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h4 style={{ marginRight: "25px" }}>FigbasProducts</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link active" aria-current="page" href="/">Productos</NavLink>
                        </div>
                        <div className="navbar-nav cart-text">
                            <NavLink to="/carrito" className="nav-link" aria-current="page" href="/">Carrito</NavLink>
                        </div>
                    </div>
                    <NavLink className="cart-icon" to="/carrito">
                        <Badge badgeContent={cartList.length} color="primary">
                            <ShoppingCart />
                        </Badge>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}
