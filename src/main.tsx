import React from 'react'
import ReactDOM from 'react-dom/client'
import { clarity } from 'react-microsoft-clarity'
import App from './app/App.tsx'
import './styles/index.css'

clarity.init('x63nholdpn')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)