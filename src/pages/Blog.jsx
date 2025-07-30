import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Ideas de Regalos Personalizados',
      description: 'Descubre las mejores ideas para regalos únicos y personalizados que harán sonreír a tus seres queridos.',
      image: '/img/car1.png',
      link: '/ideas-regalos',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Cómo Encontrar el Regalo Perfecto',
      description: 'Guía completa para elegir el regalo ideal según la personalidad y gustos de quien lo recibirá.',
      image: '/img/car2.png',
      link: '/regalo-perfecto',
      date: '2024-01-10'
    },
    {
      id: 3,
      title: 'Nuevas Retrateras Personalizadas',
      description: 'Explora nuestra nueva colección de retrateras con diseños únicos y personalizaciones especiales.',
      image: '/img/car3.png',
      link: '/post3',
      date: '2024-01-05'
    }
  ]

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre consejos, ideas y novedades sobre regalos personalizados. 
            Mantente al día con las últimas tendencias y creaciones únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <Link 
                  to={post.link}
                  className="inline-block text-primary-500 font-bold hover:text-primary-600 transition-colors duration-300"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Sección de suscripción */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              ¡Mantente informado!
            </h2>
            <p className="text-gray-600 mb-6">
              Suscríbete para recibir las últimas novedades, ofertas especiales y 
              nuevas ideas de regalos personalizados.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-primary-500 text-white font-bold rounded-r-lg hover:bg-primary-600 transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog 