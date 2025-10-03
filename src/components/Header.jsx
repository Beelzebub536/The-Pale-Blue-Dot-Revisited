import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl font-bold text-blue-400 text-glow"
          >
            The Pale Blue Dot, Revisited
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-300 hover:text-blue-400 ${
                location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Experience
            </Link>
            <Link 
              to="/data" 
              className={`transition-colors duration-300 hover:text-blue-400 ${
                location.pathname === '/data' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Data
            </Link>
            <Link 
              to="/mission" 
              className={`transition-colors duration-300 hover:text-blue-400 ${
                location.pathname === '/mission' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Mission
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header