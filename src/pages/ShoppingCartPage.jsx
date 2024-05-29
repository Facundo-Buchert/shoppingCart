import { useContext } from "react"
import Swal from "sweetalert2"
import { CartContext } from "../context/CartContext"

export const ShoppingCartPage = () => {

  const { cartList, addProduct, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const calcTotal = () => {
    return cartList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const handlePurchase = () => {
    const productsPucharsed = cartList.map(product => `${product.title} x ${product.quantity}`).join(`\n`)
    Swal.fire({
      icon: 'success',
      title: '¡Compra realizada con exito!',
      html: `<p>Has comprado:</p> <pre>${productsPucharsed}</pre> <p>¡Muchas gracias por tu compra! ☺♥</p>`,
    })
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', margin: 'auto auto auto 40px' }} /></td>
              <td><b>{product.title}</b></td>
              <td>€ {product.price}</td>
              <td>
                <button className="btn btn-outline-primary" onClick={() => decrementQuantity(product.id)}>-</button>
                <button className="btn btn-primary">{product.quantity}</button>
                <button className="btn btn-outline-primary" onClick={() => incrementQuantity(product.id)}>+</button>
              </td>
              <td><button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Eliminar</button></td>
            </tr>
          ))}
          <tr>
          <th><b>COSTO TOTAL: </b></th>
          <td></td>
          <td>€ {calcTotal()}</td>
          <td></td>
          <td></td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={handlePurchase}>Comprar</button>
      </div>
    </>
  )
}
