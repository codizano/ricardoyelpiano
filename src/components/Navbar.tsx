'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-[#2c3e50]">
            Ricardo Piano
          </Link>

          {/* Menú hamburguesa para móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#2c3e50]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menú de navegación */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
              <Link
                href="#beneficios"
                className="text-[#2c3e50] hover:text-[#3498db] py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="#niveles"
                className="text-[#2c3e50] hover:text-[#3498db] py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Niveles
              </Link>
              <Link
                href="#contacto"
                className="text-[#2c3e50] hover:text-[#3498db] py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 