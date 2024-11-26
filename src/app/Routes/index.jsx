import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './Router'
import '../styles/global.scss'
import '../styles/nullstyles.scss'
import '../styles/variables.scss'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
