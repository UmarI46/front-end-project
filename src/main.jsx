import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UsernameProvider from './contexts/UsernameProvider.jsx'
import SortByProvider from './contexts/SortByProvider.jsx'
import OrderByProvider from './contexts/OrderByProvider.jsx'

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <UsernameProvider>
      <SortByProvider>
        <OrderByProvider>
        <App />
        </OrderByProvider>
      </SortByProvider>
    </UsernameProvider>
  </BrowserRouter>
)
