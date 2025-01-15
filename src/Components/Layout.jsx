'use client'

import { useState } from 'react'

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 flex items-center px-4 shadow-sm">
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
        <h1 className="font-semibold text-lg text-gray-800 ml-2">My Website</h1>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-1 pt-16">
        {/* Left Menu - Collapsible */}
        <aside 
          className={`
            fixed md:static
            inset-y-16 left-0
            w-64 md:w-72 lg:w-64
            bg-gray-50
            border-r
            transition-transform duration-300 ease-in-out
            overflow-y-auto
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
            z-40
          `}
        >
          <nav className="p-4 space-y-2">
            <a 
              href="#" 
              className="block p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-900"
            >
              Home
            </a>
            <a 
              href="#" 
              className="block p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-900"
            >
              About
            </a>
            <a 
              href="#" 
              className="block p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-900"
            >
              Services
            </a>
            <a 
              href="#" 
              className="block p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-900"
            >
              Contact
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 bg-white">
          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Main Content</h2>
            <p className="text-gray-600">
              This is the main content area. It will adapt based on the screen size and menu state.
              The layout is now fully responsive and adapts smoothly to all screen sizes.
            </p>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="w-64 bg-gray-50 border-l hidden lg:block overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold mb-4 text-gray-800">Right Panel</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">Widget 1</div>
              <div className="p-4 bg-white rounded-lg shadow-sm">Widget 2</div>
              <div className="p-4 bg-white rounded-lg shadow-sm">Widget 3</div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t p-4 text-center mt-auto">
        <p className="text-sm text-gray-600">© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

