import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './withSelector.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
