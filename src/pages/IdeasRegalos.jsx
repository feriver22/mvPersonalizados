const IdeasRegalos = () => {
  const ideas = [
    {
      categoria: "Para Parejas",
      ideas: [
        "Retrateras personalizadas con fotos de momentos especiales",
        "Cajitas temáticas con dulces y mensajes románticos",
        "Hotwheels personalizados con nombres o fechas importantes",
        "Retrateras LED con mensajes de amor"
      ]
    },
    {
      categoria: "Para Familia",
      ideas: [
        "Retrateras para abuelos con fotos familiares",
        "Cajitas temáticas para cumpleaños",
        "Retrateras calendario personalizadas",
        "Retrateras para mascotas de la familia"
      ]
    },
    {
      categoria: "Para Amigos",
      ideas: [
        "Retrateras con memes o frases divertidas",
        "Cajitas temáticas de equipos deportivos",
        "Hotwheels personalizados con hobbies",
        "Retrateras con fotos de momentos compartidos"
      ]
    },
    {
      categoria: "Para Eventos Especiales",
      ideas: [
        "Retrateras de aniversario con fechas especiales",
        "Cajitas temáticas para graduaciones",
        "Retrateras para baby showers",
        "Retrateras para despedidas de soltero/a"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Ideas de Regalos Personalizados
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inspírate con estas ideas únicas para crear regalos que 
            realmente importen y dejen una huella especial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ideas.map((categoria, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-primary-500">
                {categoria.categoria}
              </h2>
              <ul className="space-y-3">
                {categoria.ideas.map((idea, ideaIndex) => (
                  <li key={ideaIndex} className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">💝</span>
                    <span className="text-gray-700">{idea}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sección de consejos */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Consejos para Elegir el Regalo Perfecto
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Conoce sus Gustos</h3>
              <p className="text-gray-600">
                Piensa en sus hobbies, colores favoritos, música que escucha 
                o actividades que disfruta.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💭</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Recuerda Momentos Especiales</h3>
              <p className="text-gray-600">
                Incluye fotos, fechas o mensajes que tengan significado 
                especial para ambos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sé Creativo</h3>
              <p className="text-gray-600">
                No tengas miedo de sugerir ideas únicas. Nuestro equipo 
                puede hacer realidad casi cualquier idea.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary-500 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            ¿Tienes una idea en mente?
          </h2>
          <p className="mb-6 text-lg">
            ¡Conversemos sobre tu idea y hagámosla realidad! 
            Estamos aquí para ayudarte a crear algo único.
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=50488884218&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
          >
            Consultar Idea
          </a>
        </div>
      </div>
    </div>
  )
}

export default IdeasRegalos 