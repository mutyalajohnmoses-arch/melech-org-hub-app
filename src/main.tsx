import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SiteControlProvider } from './lib/melech-site-control'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SiteControlProvider siteKey="melech-org-hub-app"><App /></SiteControlProvider>
  </React.StrictMode>,
)
