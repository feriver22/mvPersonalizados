const SobreNosotros = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre nuestra empresa y los valores que nos guían 
            para crear regalos únicos y memorables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Misión</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              "Brindar detalles personalizados con amor, dedicación y creatividad, 
              para transformar momentos especiales en recuerdos únicos y memorables."
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Visión</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              "Ser un emprendimiento reconocido a nivel nacional por la calidad, 
              originalidad y calidez con la que convertimos emociones en regalos inolvidables."
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Valores</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 font-bold mr-2">•</span>
                <span><strong>Compromiso:</strong> Cumplimos con tiempos y expectativas para hacer felices a nuestros clientes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 font-bold mr-2">•</span>
                <span><strong>Creatividad:</strong> Innovamos en cada diseño para que sea único como la persona que lo recibe.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 font-bold mr-2">•</span>
                <span><strong>Cercanía:</strong> Escuchamos a nuestros clientes y trabajamos con empatía.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 font-bold mr-2">•</span>
                <span><strong>Calidad:</strong> Utilizamos materiales y acabados que reflejan cuidado y profesionalismo.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreNosotros 