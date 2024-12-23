import logo from './assets/imagenes/logo.webp';

function App() {

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-48" />
          </div>
          {/* Botones */}
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Iniciar sesión
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
              Registrarse
            </button>
          </div>
        </div>
      </header>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Lo que hacemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img src="/path/to/icon1.png" alt="Recopilación de datos" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recopilación de datos</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src="/path/to/icon2.png" alt="Análisis predictivo" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Análisis predictivo</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src="/path/to/icon3.png" alt="Exportación de datos" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exportación de datos</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <img src="/path/to/icon4.png" alt="Procesamiento de datos" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Procesamiento de datos</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src="/path/to/icon5.png" alt="Visualización de resultados" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visualización de resultados</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
