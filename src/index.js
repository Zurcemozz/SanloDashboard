import { createRoot } from 'react-dom/client'
import App from './App'
import { DarkModeContextProvider } from './context/darkModeContext'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
)
