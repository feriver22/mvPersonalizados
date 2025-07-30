import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contacto */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=50488884218&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src="/img/whatsapplogo - copia.png" 
                  alt="WhatsApp" 
                  className="w-10 h-10"
                />
              </a>
              <a 
                href="https://www.instagram.com/mvpersonalizados.03/?igsh=MWxncW05djd0NGE1ZQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src="/img/iglogo - copia.png" 
                  alt="Instagram" 
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Enlaces útiles */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Enlaces útiles</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/preguntas-frecuentes"
                  className="text-gray-600 hover:text-primary-500 font-bold transition-colors duration-300"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link 
                  to="/pagos-envios"
                  className="text-gray-600 hover:text-primary-500 font-bold transition-colors duration-300"
                >
                  Pagos y Envíos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2024 MVPersonalizados. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 