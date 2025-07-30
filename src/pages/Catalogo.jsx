import ProductCard from '../components/cards/ProductCard'
import { getAllProducts } from '../store/catalogStore'

const Catalogo = () => {
  const products = getAllProducts()

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Catálogo de Detalles Personalizados
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra colección de regalos únicos y personalizados, 
            perfectos para cualquier ocasión especial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Sección de información adicional */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Información Importante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-primary-500">
                Personalización
              </h3>
              <p className="text-gray-600">
                Todos nuestros productos pueden ser personalizados según tus preferencias. 
                Contáctanos para discutir los detalles específicos de tu regalo.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-primary-500">
                Tiempo de Entrega
              </h3>
              <p className="text-gray-600">
                El tiempo de elaboración varía según la complejidad del diseño. 
                Te mantendremos informado sobre el progreso de tu pedido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogo 