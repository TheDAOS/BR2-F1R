import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JournalProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <JournalProvider>
    <App />
  </JournalProvider>
)
