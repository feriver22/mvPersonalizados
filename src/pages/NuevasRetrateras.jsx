// src/pages/NuevasRetrateras.jsx
import React from 'react'

const NuevasRetrateras = () => {
  const modelos = [
    {
      nombre: 'Retratera Vintage',
      descripcion:
        'Con acabado envejecido y detalles en relieve, perfecta para fotos clásicas.',
      icono: '📸',
    },
    {
      nombre: 'Retratera LED',
      descripcion:
        'Incorpora tiras de luz LED que iluminan tu imagen favorita por la noche.',
      icono: '💡',
    },
    {
      nombre: 'Retratera Acuarela',
      descripcion:
        'Con diseño artístico de acuarelas que realza la suavidad de los colores.',
      icono: '🎨',
    },
  ]

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Nuevas Retrateras Personalizadas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros últimos diseños de retrateras, creados para capturar y resaltar tus mejores recuerdos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modelos.map((modelo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{modelo.icono}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-secondary-900">
                {modelo.nombre}
              </h2>
              <p className="text-gray-600">{modelo.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Destacado especial */}
        <div className="mt-16 bg-secondary-900 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">
            ¿Por qué elegir una retratera?
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Nuestras retrateras no solo preservan una imagen: son piezas decorativas y emocionales que llenan tu espacio de calidez y personalidad.
          </p>
        </div>

        {/* Llamada a la acción */}
        <div className="mt-12 text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=50488884218&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-400 transition-colors"
          >
            Ver Catálogo de Retrateras
          </a>
        </div>
      </div>
    </div>
  )
}

export default NuevasRetrateras
