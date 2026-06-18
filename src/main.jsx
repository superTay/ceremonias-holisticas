import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import router from './router'
import { ConsentProvider } from './consent/ConsentContext'
import './i18n'
import './fonts.css'
import './index.css'

// MotionConfig reducedMotion="user": framer neutraliza transforms/layout
// animations cuando el usuario pide menos movimiento. Los bindings de
// useScroll/useTransform (parallax) no los cubre — cada componente con
// parallax usa useReducedMotion() además.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConsentProvider>
      <MotionConfig reducedMotion="user">
        <RouterProvider router={router} />
      </MotionConfig>
    </ConsentProvider>
  </React.StrictMode>,
)
