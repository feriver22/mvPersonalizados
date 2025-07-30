import { Link } from 'react-router-dom'
import Carousel from '../components/carousel/Carousel'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Carrusel */}
      <Carousel />

      {/* Hero Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Llevando sonrisas a quienes más lo necesitan
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Creamos regalos personalizados para niños y familias en situación vulnerable.
            </p>

            
            <div className="mt-12 text-lg text-gray-600 leading-relaxed">
              <p>
                En MVPersonalizados, creemos que cada niño merece sentirse especial. Nuestra organización 
                se dedica a crear regalos personalizados para niños y familias en situación vulnerable, 
                llevando alegría y esperanza a quienes más lo necesitan.
              </p>
              <p className="mt-4">
                Cada regalo que creamos lleva un mensaje de amor y esperanza. Trabajamos con comunidades 
                locales, orfanatos y centros de acogida para identificar a los niños que pueden beneficiarse 
                de nuestros programas, porque creemos que un pequeño gesto puede cambiar una vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Nuestro Impacto
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hecho con Amor</h3>
              <p className="text-gray-600">
                Cada regalo está elaborado por voluntarios con dedicación y cariño para crear sonrisas genuinas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Impacto Directo</h3>
              <p className="text-gray-600">
                Cada donación se convierte directamente en regalos personalizados para niños necesitados.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Transparencia Total</h3>
              <p className="text-gray-600">
                Compartimos el impacto de cada donación con fotos y testimonios de los beneficiarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 