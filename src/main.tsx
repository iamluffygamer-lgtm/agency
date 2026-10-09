import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { useAuthStore } from './store/authStore'

function Root() {
  useEffect(() => {
    // Initialize Firebase Auth listener on app mount
    const unsubscribe = useAuthStore.getState().initialize()
    return () => unsubscribe()
  }, [])

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
