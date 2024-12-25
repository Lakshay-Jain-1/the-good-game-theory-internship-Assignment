import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './modules/Products/pages/Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Products/>
  </StrictMode>,
)
