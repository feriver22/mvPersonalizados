const PagosEnvios = () => {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Pagos y Envíos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Información completa sobre nuestros métodos de pago, 
            opciones de envío y políticas de entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Métodos de Pago */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Métodos de Pago
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏦</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Transferencias Bancarias</h3>
                  <p className="text-gray-600">
                    Transferencias directas a nuestras cuentas bancarias. 
                    Te proporcionamos los datos bancarios al confirmar tu pedido.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💳</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Depósitos</h3>
                  <p className="text-gray-600">
                    Depósitos en efectivo en nuestras cuentas bancarias. 
                    Ideal para quienes prefieren pagar en efectivo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Pago en Efectivo</h3>
                  <p className="text-gray-600">
                    Para entregas locales, aceptamos pagos en efectivo 
                    al momento de la entrega.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Plataformas Digitales</h3>
                  <p className="text-gray-600">
                    Algunas plataformas de pago digital están disponibles 
                    según tu ubicación.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Opciones de Envío */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Opciones de Envío
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🚚</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Envío Nacional</h3>
                  <p className="text-gray-600">
                    Envíos a todo Honduras con seguimiento en tiempo real. 
                    Tiempo de entrega: 2-5 días hábiles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🏠</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Entrega Local</h3>
                  <p className="text-gray-600">
                    Para clientes en la misma ciudad, ofrecemos entrega 
                    personalizada sin costo adicional.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Empaque Seguro</h3>
                  <p className="text-gray-600">
                    Todos nuestros productos se empacan con materiales 
                    protectores para garantizar su llegada en perfecto estado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📋</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Seguimiento</h3>
                  <p className="text-gray-600">
                    Te proporcionamos número de seguimiento para que 
                    puedas monitorear tu envío en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Información Importante
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-primary-500">
                Política de Pagos
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Se requiere un anticipo del 50% para confirmar el pedido</li>
                <li>• El saldo restante se paga al momento de la entrega</li>
                <li>• Para envíos nacionales, el pago completo se realiza por adelantado</li>
                <li>• Aceptamos pagos parciales para pedidos de alto valor</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-primary-500">
                Política de Envíos
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Los envíos se realizan de lunes a viernes</li>
                <li>• No realizamos envíos en días festivos</li>
                <li>• Los costos de envío se calculan según el peso y destino</li>
                <li>• Garantizamos la entrega en el tiempo estimado</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contacto para consultas */}
        <div className="mt-12 bg-primary-500 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            ¿Tienes dudas sobre pagos o envíos?
          </h2>
          <p className="mb-6 text-lg">
            Nuestro equipo está disponible para resolver cualquier consulta 
            sobre métodos de pago o opciones de envío.
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=50488884218&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default PagosEnvios 