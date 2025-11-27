import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import { ClerkSyncProvider } from './components/organisms/ClerkSyncProvider.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY} 
      appearance={{
         baseTheme: dark,
         variables: {
            colorBackground: 'var(--clerk-bg)',
         },
      }}
    >
      <ClerkSyncProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ClerkSyncProvider>
    </ClerkProvider>
  </StrictMode>,
)
