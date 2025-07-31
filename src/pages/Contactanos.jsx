import { useState } from 'react'

const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido personalizado? 
            ¡Estamos aquí para ayudarte!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Envíanos un mensaje
            </h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ¡Mensaje enviado con éxito! Te responderemos pronto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-bold text-gray-700 mb-2">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu correo electrónico"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-bold text-gray-700 mb-2">
                  Asunto:
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Asunto del mensaje"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-bold text-gray-700 mb-2">
                  Mensaje:
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Información de contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">WhatsApp</h3>
                    <a 
                      href="https://api.whatsapp.com/send/?phone=50488884218&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      +504 8888-4218
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">📷</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/mvpersonalizados.03/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      @mvpersonalizados.03
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Horario de atención</h3>
                    <p className="text-gray-600">Lunes a Domingo: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                ¿Por qué contactarnos?
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Consultas sobre productos personalizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Cotizaciones para eventos especiales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Información sobre tiempos de entrega</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Soporte y seguimiento de pedidos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactanos 