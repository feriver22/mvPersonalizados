const ProductCard = ({ product }) => {
  const { image, title, price, alt } = product

  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-2xl font-bold text-primary-500">
          L. {price}
        </p>
        
        <button className="mt-4 w-full btn-primary">
          Ver Detalles
        </button>
      </div>
    </div>
  )
}

export default ProductCard 