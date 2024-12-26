import logo from './assets/imagenes/logo.webp';
import img2 from './assets/imagenes/img2.webp';
import cargar from './assets/imagenes/cargar.webp';
import modelo from './assets/imagenes/modelo.webp';
import visualizacion from './assets/imagenes/visualizacion.webp';
import contacto from './assets/imagenes/contacto.webp';
import que_hacemos from './assets/imagenes/que_hacemos.png';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './rutas/rutas'; // Importa las rutas

function App() {

  return (
    <>
    <AppRoutes />

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
      <section className="bg-[#F0F0F0] py-12">
        <div className="mx-auto text-center grid place-items-center">
          <h2 className="text-4xl font-bold mb-10">Lo que hacemos</h2>
          <img src={que_hacemos} alt="que_hacemos" />
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
      <section className="bg-[#F0F0F0] py-16">
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
        <div className="container mx-auto px-20">
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
                src={contacto}
                alt="contacto"
                className="w-9/12"
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
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-8 h-8"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.447.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
        </div>
      </section>
      {/* Pie de página */}
      <footer className="bg-[#F0F0F0] py-4 text-center">
        <p className="text-sm">Todos los derechos reservados Copyright © 2024</p>
      </footer>
    </>
  )
}

export default App
