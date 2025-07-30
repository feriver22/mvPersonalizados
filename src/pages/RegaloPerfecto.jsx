// src/pages/RegaloPerfecto.jsx
import React from 'react'

const RegaloPerfecto = () => {
  const pasos = [
    {
      icon: '🕵️',
      titulo: 'Investiga sus Pasiones',
      descripcion:
        'Descubre sus hobbies, libros o series favoritas, y cualquier detalle que muestre qué le apasiona.',
    },
    {
      icon: '📅',
      titulo: 'Recuerda Fechas Clave',
      descripcion:
        'Anota aniversarios, cumpleaños o logros importantes para elegir un regalo significativo.',
    },
    {
      icon: '💬',
      titulo: 'Pregunta con Discreción',
      descripcion:
        'Conversaciones casuales pueden darte pistas: “¿Qué te gustaría recibir en tu próxima celebración?”',
    },
  ]

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Cómo Encontrar el Regalo Perfecto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sigue estos simples pasos para asegurar que tu obsequio toque el corazón de esa persona especial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pasos.map((paso, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{paso.icon}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-secondary-900">
                {paso.titulo}
              </h2>
              <p className="text-gray-600">{paso.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Consejo destacado */}
        <div className="mt-16 bg-primary-500 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Tip Extra: Personalización
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Agregar un detalle único (una fecha, una foto o un mensaje grabado) convierte cualquier regalo en un recuerdo inolvidable.
          </p>
        </div>

        {/* Llamada a la acción */}
        <div className="mt-12 text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=50488884218&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary-900 text-white px-8 py-3 rounded-full font-bold hover:bg-secondary-800 transition-colors"
          >
            Crea tu Regalo Perfecto
          </a>
        </div>
      </div>
    </div>
  )
}

export default RegaloPerfecto
