import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ShoppingCartApp } from './ShoppingCartApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <ShoppingCartApp/>
  </React.StrictMode>,
  </BrowserRouter>
)
