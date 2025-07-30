import { useState } from 'react'

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "¿Cuánto tiempo toma la elaboración de un regalo personalizado?",
      answer: "El tiempo de elaboración varía según la complejidad del diseño. En general, nuestros productos toman entre 3-7 días hábiles. Para pedidos especiales o eventos importantes, recomendamos hacer el pedido con al menos 2 semanas de anticipación."
    },
    {
      question: "¿Puedo personalizar completamente el diseño?",
      answer: "¡Absolutamente! Nos encanta trabajar con ideas personalizadas. Puedes enviarnos tus ideas, fotos de referencia o simplemente describir lo que tienes en mente. Nuestro equipo creativo trabajará contigo para crear algo único y especial."
    },
    {
      question: "¿Hacen envíos a todo el país?",
      answer: "Sí, realizamos envíos a todo Honduras. Los costos de envío varían según la ubicación y el tamaño del producto. Te proporcionamos la cotización completa incluyendo envío antes de confirmar tu pedido."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencias bancarias, depósitos, pagos en efectivo y algunas plataformas digitales. Los detalles de pago se te proporcionan al momento de hacer tu pedido."
    },
    {
      question: "¿Puedo hacer cambios después de confirmar el pedido?",
      answer: "Los cambios menores pueden realizarse dentro de las primeras 24 horas después de confirmar el pedido. Para cambios mayores, dependerá del estado de elaboración del producto. Te recomendamos revisar bien todos los detalles antes de confirmar."
    },
    {
      question: "¿Los productos son resistentes y duraderos?",
      answer: "Utilizamos materiales de alta calidad para asegurar que nuestros productos sean duraderos. Sin embargo, recomendamos un manejo cuidadoso para mantener su belleza por más tiempo."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros 
            productos y servicios personalizados.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-800 text-lg">
                    {faq.question}
                  </span>
                  <span className={`text-primary-500 text-2xl transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sección de contacto adicional */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              ¿No encontraste tu respuesta?
            </h2>
            <p className="text-gray-600 mb-6">
              Si tienes alguna pregunta específica que no está cubierta aquí, 
              no dudes en contactarnos directamente.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=50488884218&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreguntasFrecuentes 