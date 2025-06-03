import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white text-[#2c3e50] font-sans">
      {/* Hero Section - Con gradiente suave, sin márgenes laterales */}
      <section className="bg-[linear-gradient(90deg,_#fdf6ee_0%,_#f3fdfa_100%)] w-full py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#2c3e50]">
              Clases de Piano Profesionales
            </h1>
            <p className="text-xl md:text-2xl text-[#34495e] mb-8">
              Aprende piano con un método personalizado que se adapta a tus gustos musicales. Desde música clásica hasta bandas sonoras de películas, pop y rock. Incluye complementos de vocalización para quienes lo deseen.
            </p>
            <Link 
              href="#contacto" 
              className="bg-[#3498db] hover:bg-[#2980b9] text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Comienza tu Viaje Musical
            </Link>
          </div>
          {/* Imagen para móvil */}
          <div className="md:hidden relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/hero2.png"
              alt="Clases de piano"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
          {/* Imagen para desktop */}
          <div className="hidden md:block relative w-full h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/hero2.png"
              alt="Estudiante aprendiendo piano"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Beneficios Section - Sin gradiente */}
      <section className="bg-white container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2c3e50]">¿Por qué elegir mis clases?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[linear-gradient(90deg,_#fdf6ee_0%,_#f3fdfa_100%)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 md:border-2 border-[#ffb088] hover:border-6 md:hover:border-4">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/metodo.jpeg"
                alt="Piano personalizado"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Método Personalizado</h3>
            <p className="text-[#34495e]">Adaptado a tus gustos musicales y objetivos personales. Aprende con el repertorio que más te inspire, desde música clásica hasta tus canciones favoritas.</p>
          </div>
          <div className="bg-[linear-gradient(90deg,_#fdf6ee_0%,_#f3fdfa_100%)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 md:border-2 border-[#ffb088] hover:border-6 md:hover:border-4">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/posture.png"
                alt="Técnica de piano"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Técnica Profesional</h3>
            <p className="text-[#34495e]">Aprende la postura correcta y técnica avanzada para desarrollar una conexión profunda y expresiva con el instrumento.</p>
          </div>
          <div className="bg-[linear-gradient(90deg,_#fdf6ee_0%,_#f3fdfa_100%)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 md:border-2 border-[#ffb088] hover:border-6 md:hover:border-4">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/vocal.png"
                alt="Desarrollo musical"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Desarrollo Musical Integral</h3>
            <p className="text-[#34495e]">Combina el aprendizaje del piano con técnicas de vocalización para un desarrollo musical completo. Aprende a expresarte tanto con el instrumento como con tu voz.</p>
          </div>
          <div className="bg-[linear-gradient(90deg,_#fdf6ee_0%,_#f3fdfa_100%)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 md:border-2 border-[#ffb088] hover:border-6 md:hover:border-4">
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/girl-learns-play-piano.png"
                alt="Flexibilidad horaria"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Flexibilidad Horaria</h3>
            <p className="text-[#34495e]">Clases de una hora académica, adaptadas a tu disponibilidad semanal para garantizar un progreso constante.</p>
          </div>
        </div>
      </section>

      {/* Niveles Section - Con gradiente suave, sin márgenes laterales */}
      <section className="bg-[linear-gradient(90deg,_#fdf6ee_0%,_#f3fdfa_100%)] w-full py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2c3e50]">¿Que enseño en mis clases?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[linear-gradient(90deg,_#fdf6ee_0%,_#f3fdfa_100%)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 md:border-2 border-[#ffb088] hover:border-6 md:hover:border-4">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/kid.jpg"
                  alt="Nivel principiante"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Principiante</h3>
              <ul className="text-[#34495e] space-y-2">
                <li>• Fundamentos de la técnica pianística</li>
                <li>• Lectura musical y teoría</li>
                <li>• Postura y expresión musical</li>
                <li>• Exploración de diferentes géneros musicales</li>
              </ul>
            </div>
            <div className="bg-[linear-gradient(90deg,_#fdf6ee_0%,_#f3fdfa_100%)] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 md:border-2 border-[#ffb088] hover:border-6 md:hover:border-4">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/adult.png"
                  alt="Nivel avanzado"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Avanzado</h3>
              <ul className="text-[#34495e] space-y-2">
                <li>• Técnica avanzada y refinamiento</li>
                <li>• Interpretación musical profesional</li>
                <li>• Armonía</li>
                <li>• Repertorio personalizado según tus intereses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section - Sin gradiente */}
      <section id="contacto" className="bg-white container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#2c3e50]">¿Listo para comenzar?</h2>
          <p className="text-xl text-[#34495e] mb-8">
            ¡Comienza tu viaje musical con una primera clase completamente gratuita! Descubre tu potencial y conoce mi metodología personalizada. Precios a convenir según tus objetivos y frecuencia de clases.
          </p>
          <div className="space-y-4">
            <a 
              href="https://wa.me/573133741678" 
              className="block bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              WhatsApp
            </a>
            <a 
              href="https://instagram.com/ricardoyelpiano" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:from-[#fdc468] hover:via-[#fa7e1e] hover:to-[#c13584] text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Instagram
            </a>
            <a 
              href="https://tiktok.com/@ricardootaloraluna012" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Con gradiente suave */}
      <footer className="bg-[linear-gradient(90deg,_#fdf6ee_0%,_#f3fdfa_100%)] border-t border-[#e9ecef]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1 - Información */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#2c3e50] mb-4">Clases de Piano</h3>
              <p className="text-[#34495e]">
                Aprende piano de manera personalizada y efectiva con un método único adaptado a tus necesidades.
              </p>
            </div>

            {/* Columna 2 - Enlaces Rápidos */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#2c3e50] mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#contacto" className="text-[#34495e] hover:text-[#3498db] transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/ricardoyelpiano" target="_blank" rel="noopener noreferrer" className="text-[#34495e] hover:text-[#3498db] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com/@ricardootaloraluna012" target="_blank" rel="noopener noreferrer" className="text-[#34495e] hover:text-[#3498db] transition-colors">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3 - Contacto */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-[#2c3e50] mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://wa.me/573133741678" className="text-[#34495e] hover:text-[#3498db] transition-colors">
                    WhatsApp: +57 313 374 1678
                  </a>
                </li>
                <li>
                  <a href="mailto:ricardootalora12@gmail.com" className="text-[#34495e] hover:text-[#3498db] transition-colors">
                    ricardootalora12@gmail.com
                  </a>
                </li>
                <li className="text-[#34495e]">
                  Barrio San Eduardo, Cúcuta, Colombia
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-[#e9ecef] mt-8 pt-8">
            <p className="text-center text-[#34495e]">
              © {new Date().getFullYear()} Ricardo Piano. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
