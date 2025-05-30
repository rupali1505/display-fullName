import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DisplayName from './DisplayFullname.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DisplayName/>

  </StrictMode>,
)
