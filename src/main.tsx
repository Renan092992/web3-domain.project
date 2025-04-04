import React from 'react'
import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import DomainRegister from './domain/Domain_Index'
import BillingAndInfo from './domain/BillingAndInfo'
import DomainSearchResults from './domain/DomainSearchResults'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DomainRegister />} />
        <Route path="/register-domain" element={<BillingAndInfo />} />
        <Route path="/search" element={<DomainSearchResults />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
