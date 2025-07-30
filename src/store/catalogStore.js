// Datos del catálogo de productos
export const catalogData = [
  {
    id: 1,
    image: '/catalogos/cajitatematicaequipo.PNG',
    title: 'Caja Temática de Equipo',
    price: '485',
    alt: 'Caja temática de equipo'
  },
  {
    id: 2,
    image: '/catalogos/retratera con cajita.PNG',
    title: 'Retratera con Cajita y Ferreros Rocher',
    price: '600',
    alt: 'Retratera con cajita de chocolates'
  },
  {
    id: 3,
    image: '/catalogos/retrateraabuelo.PNG',
    title: 'Retratera Abuelo',
    price: '265',
    alt: 'Retratera para el abuelo con cariño'
  },
  {
    id: 4,
    image: '/catalogos/retrateracalendario.PNG',
    title: 'Retratera Calendario',
    price: '300',
    alt: 'Retratera calendario personalizada'
  },
  {
    id: 5,
    image: '/catalogos/retrateraled.PNG',
    title: 'Retratera LED',
    price: '340',
    alt: 'Retratera iluminada con luces LED'
  },
  {
    id: 6,
    image: '/catalogos/retrateramascota.PNG',
    title: 'Retratera Mascota',
    price: '270',
    alt: 'Retratera para tu mascota'
  },
  {
    id: 7,
    image: '/catalogos/retrateraniversario.PNG',
    title: 'Retratera Aniversario',
    price: '300',
    alt: 'Retratera especial para aniversario'
  },
  {
    id: 8,
    image: '/catalogos/retraterapadre.PNG',
    title: 'Retratera para Papá',
    price: '400',
    alt: 'Retratera para papá personalizada'
  },
  {
    id: 9,
    image: '/catalogos/retraterapareja.PNG',
    title: 'Retratera Pareja',
    price: '240',
    alt: 'Retratera romántica para pareja'
  }
]

// Función para obtener todos los productos
export const getAllProducts = () => {
  return catalogData
}

// Función para obtener un producto por ID
export const getProductById = (id) => {
  return catalogData.find(product => product.id === id)
}

// Función para filtrar productos por categoría (si se implementa en el futuro)
export const getProductsByCategory = (category) => {
  return catalogData.filter(product => product.category === category)
} 