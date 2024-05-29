import { useEffect, useState } from 'react'
import { ProductContext } from "./ProductContext"
import Swal from "sweetalert2"

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Hubo un error mientras se cargaban los productos! Estamos intentando solucionarlo! ☺♥`,
      })
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>

    )
}
