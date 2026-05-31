import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx' // 1. Change extension to .tsx here once you rename App

// 2. Add 'as HTMLElement' so TypeScript knows the root element definitely exists
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
