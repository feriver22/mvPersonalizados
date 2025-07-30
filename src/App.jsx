// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import SobreNosotros from './pages/SobreNosotros'
import Blog from './pages/Blog'
import Contactanos from './pages/Contactanos'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import PagosEnvios from './pages/PagosEnvios'
import IdeasRegalos from './pages/IdeasRegalos'
import RegaloPerfecto from './pages/RegaloPerfecto'
import NuevasRetrateras from './pages/NuevasRetrateras'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="/pagos-envios" element={<PagosEnvios />} />
            <Route path="/ideas-regalos" element={<IdeasRegalos />} />
            <Route path="/regalo-perfecto" element={<RegaloPerfecto />} />
            <Route path="/nuevas-retrateras" element={<NuevasRetrateras />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}
