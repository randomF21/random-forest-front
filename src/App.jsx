import logo from './assets/imagenes/logo.webp';
import img2 from './assets/imagenes/img2.webp';
import cargar from './assets/imagenes/cargar.webp';
import modelo from './assets/imagenes/modelo.webp';
import visualizacion from './assets/imagenes/visualizacion.webp';
import contacto from './assets/imagenes/contacto.webp';

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
            <button className="bg-[#2B6CB0] text-white px-4 py-2 rounded">
              Iniciar sesión
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Sección: Lo que hacemos */}
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

      {/* Sección: Descripción */}
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col justify-center items-center md:flex-row">
          {/* Imagen del computador */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src={img2} alt="Computadora" className='rounded-lg' />
          </div>
          {/* Texto descriptivo */}
          <div className="w-full md:w-1/2 text-center px-4">
            <h2 className="text-3xl font-bold mb-6">¡Transforma tus datos en decisiones estratégicas hoy mismo!</h2>
            <p className="text-gray-700 mb-4">
              Descubre el poder transformador de nuestro sistema de análisis de datos,
              una herramienta integral que te permitirá llevar tu toma de decisiones al siguiente nivel.
              Con la capacidad de recopilar datos desde múltiples fuentes y transformarlos en información valiosa,
              podrás anticipar tendencias y comportamientos futuros gracias a nuestro avanzado análisis predictivo con Random Forest.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: características */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#C4C4C4] p-10 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6">Carga de datos fácil</h3>
              <img src={cargar} alt="icono cargar" className="w-24 mb-7" />
              <p className='text-xl'>
                Los usuarios podrán cargar datos de manera rápida y sencilla, sin necesidad de conocimientos técnicos avanzados.
              </p>
            </div>
            <div className="bg-[#C4C4C4] p-10 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6">Modelos predictivos precisos</h3>
              <img src={modelo} alt="icono mdoelo" className="w-24 mb-7" />
              <p className='text-xl'>
                Los usuarios podrán anticipar resultados futuros con gran exactitud, utilizando datos históricos y técnicas avanzadas de análisis.
              </p>
            </div>
            <div className="bg-[#C4C4C4] p-10 rounded-lg shadow-md flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6">Visualización interactiva</h3>
              <img src={visualizacion} alt="icono visualización" className="w-24 mb-7" />
              <p className='text-xl'>
                Los usuarios podrán interactuar con sus datos, permitiendo una exploración dinámica y atractiva de la información.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Contacto */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Título */}
          <h2 className="text-4xl font-bold text-center mb-8">Contacto</h2>
          {/* Formulario */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <form className="space-y-3">
                <div>
                  <label htmlFor="nombre" className="block text-lg font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Ingresa el nombre"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-lg font-medium mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    placeholder="Ingresa el correo electrónico"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-lg font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    placeholder="Ingresa el mensaje"
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-72 bg-[#2B6CB0] text-white text-lg py-2 rounded-lg transition"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
            {/* Imagen */}
            <div className="flex justify-center">
              <img
                src={contacto} // Cambia esto por la ruta real de la imagen
                alt="contacto"
                className="w-8/12"
              />
            </div>
          </div>
          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/3165402961"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white w-16 h-16 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.032.512 3.948 1.4 5.644L0 24l6.611-1.372A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.636 17.468c-.2.564-1.15 1.098-1.585 1.15-.409.045-.874.2-2.953-.625-2.496-1.001-4.104-3.5-4.23-3.666-.127-.166-1.016-1.329-1.016-2.54s.643-1.809.875-2.059c.226-.244.49-.305.654-.305.166 0 .33.001.474.009.15.007.353-.056.553.428.2.484.682 1.677.738 1.795.06.119.1.26.02.425-.084.164-.127.257-.254.391-.127.133-.267.298-.383.402-.118.105-.24.22-.103.437.136.215.606.994 1.298 1.613.89.779 1.642 1.016 1.857 1.13.215.114.333.105.456-.06.123-.166.522-.612.66-.823.137-.21.28-.174.479-.105.2.07 1.27.599 1.49.71.217.11.358.168.409.26.05.093.05.53-.15 1.093z" />
            </svg>
          </a>
        </div>
      </section>

    </>
  )
}

export default App
