import { useState, useEffect } from 'react'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const images = [
    '/img/car1.png',
    '/img/car2.png',
    '/img/car3.png'
  ]

  const moveCarousel = (newIndex) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    
    if (newIndex >= images.length) {
      newIndex = 0
    }
    
    setCurrentIndex(newIndex)
    
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const updateButtons = (index) => {
    const buttons = document.querySelectorAll('.carousel-button')
    buttons.forEach(button => button.classList.remove('bg-primary-500'))
    buttons[index]?.classList.add('bg-primary-500')
  }

  useEffect(() => {
    updateButtons(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(currentIndex + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="relative w-4/5 h-60vh mx-auto overflow-hidden bg-primary-50 mb-10 rounded-lg shadow-lg">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel image ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-button w-4 h-4 rounded-full border-none cursor-pointer transition-colors duration-300 ${
              index === currentIndex ? 'bg-primary-500' : 'bg-white'
            }`}
            onClick={() => moveCarousel(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousel 