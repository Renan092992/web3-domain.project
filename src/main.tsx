import React from 'react'
import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import DomainRegister from './components/Domain_Index'
import PaymentSelect from './components/PaymentSelect'
import DomainSearchResults from './components/DomainSearchResults'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DomainRegister />} />
        <Route path="/register-domain" element={<PaymentSelect />} />
        <Route path="/search" element={<DomainSearchResults />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
